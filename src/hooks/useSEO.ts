import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_OG_IMAGE, SITE_URL } from "../lib/seo";

interface SEOOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
}

function upsertMeta(selector: string, createTag: () => HTMLElement, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = createTag();
    document.head.appendChild(el);
  }
  for (const [key, value] of Object.entries(attrs)) {
    el.setAttribute(key, value);
  }
}

export function useSEO({ title, description, path, image = DEFAULT_OG_IMAGE, type = "website", noindex = false }: SEOOptions) {
  const location = useLocation();
  const resolvedPath = path ?? location.pathname;

  useEffect(() => {
    document.title = title;

    const canonicalUrl = `${SITE_URL}${resolvedPath === "/" ? "/" : resolvedPath.replace(/\/$/, "")}`;

    upsertMeta('meta[name="description"]', () => document.createElement("meta"), {
      name: "description",
      content: description,
    });

    upsertMeta('link[rel="canonical"]', () => document.createElement("link"), {
      rel: "canonical",
      href: canonicalUrl,
    });

    upsertMeta('meta[property="og:type"]', () => document.createElement("meta"), {
      property: "og:type",
      content: type,
    });
    upsertMeta('meta[property="og:title"]', () => document.createElement("meta"), {
      property: "og:title",
      content: title,
    });
    upsertMeta('meta[property="og:description"]', () => document.createElement("meta"), {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:url"]', () => document.createElement("meta"), {
      property: "og:url",
      content: canonicalUrl,
    });
    upsertMeta('meta[property="og:image"]', () => document.createElement("meta"), {
      property: "og:image",
      content: image,
    });

    upsertMeta('meta[name="twitter:card"]', () => document.createElement("meta"), {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', () => document.createElement("meta"), {
      name: "twitter:title",
      content: title,
    });
    upsertMeta('meta[name="twitter:description"]', () => document.createElement("meta"), {
      name: "twitter:description",
      content: description,
    });
    upsertMeta('meta[name="twitter:image"]', () => document.createElement("meta"), {
      name: "twitter:image",
      content: image,
    });

    const robotsTag = document.head.querySelector('meta[name="robots"]');
    if (noindex) {
      upsertMeta('meta[name="robots"]', () => document.createElement("meta"), {
        name: "robots",
        content: "noindex, nofollow",
      });
    } else if (robotsTag) {
      robotsTag.remove();
    }
  }, [title, description, resolvedPath, image, type, noindex]);
}
