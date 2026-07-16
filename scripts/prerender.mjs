import { spawn } from 'node:child_process';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import puppeteer from 'puppeteer';

const PORT = 4173;
const ROOT = process.cwd();
const DIST = path.join(ROOT, 'dist');
const VITE_BIN = path.join(ROOT, 'node_modules/.bin/vite');

async function getRoutes() {
  const sitemap = await readFile(path.join(ROOT, 'public/sitemap.xml'), 'utf-8');
  const locs = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
  return [...new Set([...locs, '/style-guide'])];
}

function waitForServer(url, timeoutMs = 30000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try {
        const res = await fetch(url);
        if (res.ok) return resolve();
      } catch {
        // server not up yet
      }
      if (Date.now() - start > timeoutMs) return reject(new Error('preview server did not start in time'));
      setTimeout(tick, 300);
    };
    tick();
  });
}

async function main() {
  const routes = await getRoutes();
  const server = spawn(VITE_BIN, ['preview', '--port', String(PORT), '--strictPort'], {
    cwd: ROOT,
    stdio: 'inherit',
  });
  const stopServer = () => server.kill();
  process.on('exit', stopServer);

  try {
    await waitForServer(`http://localhost:${PORT}/`);

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    for (const route of routes) {
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0' });
      await page.waitForSelector('h1', { timeout: 10000 });
      // let entrance animations (framer-motion fade-ins) settle so the static
      // snapshot isn't frozen mid-animation with opacity:0 baked in
      await new Promise((resolve) => setTimeout(resolve, 1200));
      const html = await page.evaluate(() => document.documentElement.outerHTML);

      const outPath =
        route === '/' ? path.join(DIST, 'index.html') : path.join(DIST, route.slice(1), 'index.html');

      await mkdir(path.dirname(outPath), { recursive: true });
      await writeFile(outPath, `<!doctype html>\n${html}`, 'utf-8');
      console.log(`prerendered ${route} -> ${path.relative(ROOT, outPath)}`);
    }

    await browser.close();
  } finally {
    stopServer();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
