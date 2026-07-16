import React, { useCallback, useEffect, useState } from "react";
import { AlertCircle, LogOut, RefreshCw, Lock } from "lucide-react";
import { supabase } from "../lib/supabase";
import { useSEO } from "../hooks/useSEO";

type TableKey = "partner_requests" | "quote_requests" | "demo_requests";

const TABS: { key: TableKey; label: string; columns: { field: string; label: string }[] }[] = [
  {
    key: "partner_requests",
    label: "Community Partners",
    columns: [
      { field: "created_at", label: "Date" },
      { field: "organization", label: "Organization" },
      { field: "name", label: "Name" },
      { field: "email", label: "Email" },
      { field: "org_type", label: "Type" },
      { field: "city", label: "City" },
      { field: "website", label: "Website" },
      { field: "socials", label: "Socials" },
      { field: "about", label: "About" },
    ],
  },
  {
    key: "quote_requests",
    label: "Quote Requests",
    columns: [
      { field: "created_at", label: "Date" },
      { field: "name", label: "Name" },
      { field: "email", label: "Email" },
      { field: "organization", label: "Organization" },
      { field: "plan", label: "Plan" },
      { field: "event_type", label: "Event type" },
      { field: "event_duration", label: "Duration" },
      { field: "attendee_count", label: "Attendees" },
      { field: "website", label: "Website" },
    ],
  },
  {
    key: "demo_requests",
    label: "Demo Requests",
    columns: [
      { field: "created_at", label: "Date" },
      { field: "name", label: "Name" },
      { field: "email", label: "Email" },
      { field: "organization", label: "Organization" },
      { field: "role", label: "Role" },
      { field: "message", label: "Message" },
    ],
  },
];

type Row = Record<string, string | null>;

function formatCell(field: string, value: string | null) {
  if (!value) return "";
  if (field === "created_at") {
    const d = new Date(value);
    return `${d.toLocaleDateString()} ${d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
  }
  return value;
}

export function AdminPage() {
  useSEO({
    title: "Admin | Knod",
    description: "Internal Knod dashboard.",
    noindex: true,
  });

  const [session, setSession] = useState<unknown>(null);
  const [checking, setChecking] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [signingIn, setSigningIn] = useState(false);

  const [tab, setTab] = useState<TableKey>("partner_requests");
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    if (!supabase) {
      setChecking(false);
      return;
    }
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setChecking(false);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, []);

  const load = useCallback(async () => {
    if (!supabase || !session) return;
    setLoading(true);
    setLoadError("");
    const { data, error } = await supabase
      .from(tab)
      .select("*")
      .order("created_at", { ascending: false })
      .limit(500);
    setLoading(false);
    if (error) {
      setLoadError(error.message);
      setRows([]);
      return;
    }
    setRows((data ?? []) as Row[]);
  }, [tab, session]);

  useEffect(() => {
    if (session) load();
  }, [session, load]);

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) return;
    setAuthError("");
    setSigningIn(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setSigningIn(false);
    if (error) setAuthError(error.message);
  };

  const signOut = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
    setRows([]);
  };

  if (checking) {
    return (
      <main className="flex-1 w-full min-h-screen flex items-center justify-center bg-[#f5f5f7]">
        <div className="w-6 h-6 border-2 border-brand-black/20 border-t-brand-black rounded-full animate-spin" />
      </main>
    );
  }

  if (!session) {
    return (
      <main className="flex-1 w-full min-h-screen flex items-center justify-center bg-[#f5f5f7] px-4">
        <form
          onSubmit={signIn}
          className="w-full max-w-sm bg-white rounded-[1.5rem] border border-brand-black/5 shadow-xl p-8"
        >
          <div className="w-11 h-11 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-5">
            <Lock className="w-5 h-5" />
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-brand-black mb-1">Knod admin</h1>
          <p className="text-sm text-brand-black/60 mb-6">Sign in to view form submissions.</p>

          <label className="block text-xs font-semibold text-brand-black/60 uppercase tracking-wider mb-1.5">Email</label>
          <input
            type="email"
            required
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] border border-black/5 focus:bg-white focus:border-brand-blue/60 outline-none mb-4"
          />

          <label className="block text-xs font-semibold text-brand-black/60 uppercase tracking-wider mb-1.5">Password</label>
          <input
            type="password"
            required
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] border border-black/5 focus:bg-white focus:border-brand-blue/60 outline-none mb-4"
          />

          {authError && (
            <div className="flex items-start gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2 mb-4">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={signingIn}
            className="w-full bg-brand-black text-white py-3.5 rounded-xl font-semibold hover:bg-brand-blue transition-colors disabled:opacity-50 cursor-pointer"
          >
            {signingIn ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </main>
    );
  }

  const active = TABS.find((t) => t.key === tab)!;

  return (
    <main className="flex-1 w-full min-h-screen bg-[#f5f5f7] px-4 sm:px-6 lg:px-10 py-10">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-brand-black">Knod admin</h1>
            <p className="text-sm text-brand-black/60">Form submissions</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={load}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-brand-black/10 text-sm font-medium hover:bg-brand-black/5 transition-colors cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
              Refresh
            </button>
            <button
              onClick={signOut}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-brand-black/10 text-sm font-medium hover:bg-brand-black/5 transition-colors cursor-pointer"
            >
              <LogOut className="w-4 h-4" />
              Sign out
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
                tab === t.key
                  ? "bg-brand-black text-white"
                  : "bg-white text-brand-black/70 border border-brand-black/10 hover:bg-brand-black/5"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-[1.5rem] border border-brand-black/5 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-brand-black/5 flex items-center justify-between">
            <span className="text-sm font-semibold text-brand-black">
              {active.label}
              <span className="text-brand-black/40 font-normal ml-2">
                {loading ? "loading..." : `${rows.length} ${rows.length === 1 ? "entry" : "entries"}`}
              </span>
            </span>
          </div>

          {loadError && (
            <div className="flex items-start gap-2 text-sm text-red-600 bg-red-50 border-b border-red-200 px-5 py-3">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{loadError}</span>
            </div>
          )}

          {!loading && rows.length === 0 && !loadError ? (
            <div className="px-5 py-16 text-center text-brand-black/50 text-sm">
              No submissions yet. They will appear here as they come in.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#fafafa] text-left">
                    {active.columns.map((c) => (
                      <th
                        key={c.field}
                        className="px-4 py-3 font-semibold text-brand-black/60 whitespace-nowrap text-xs uppercase tracking-wider"
                      >
                        {c.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={i} className="border-t border-brand-black/5 hover:bg-[#fafafa] align-top">
                      {active.columns.map((c) => (
                        <td key={c.field} className="px-4 py-3 text-brand-black/80 max-w-[280px]">
                          {c.field === "email" && row[c.field] ? (
                            <a href={`mailto:${row[c.field]}`} className="text-brand-blue hover:underline">
                              {row[c.field]}
                            </a>
                          ) : c.field === "website" && row[c.field] ? (
                            <a
                              href={row[c.field]!.startsWith("http") ? row[c.field]! : `https://${row[c.field]}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-brand-blue hover:underline break-all"
                            >
                              {row[c.field]}
                            </a>
                          ) : (
                            <span className="break-words">{formatCell(c.field, row[c.field])}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
