import { useState } from "react";
import { ImageIcon } from "lucide-react";

/**
 * Renders an event photo, or a branded fallback panel when the image is
 * missing or fails to load, so the layout is never broken and nothing fake ships.
 */
export function CaseImage({
  src,
  alt,
  className = "",
  client,
  meta,
  contain = false,
}: {
  src?: string;
  alt: string;
  className?: string;
  /** Shown on the fallback panel. */
  client: string;
  meta?: { venue: string; date: string };
  /** Use object-contain instead of object-cover (for posters/graphics). */
  contain?: boolean;
}) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return (
      <div
        className={`flex flex-col items-center justify-center text-center bg-gradient-to-br from-brand-blue to-[#0033ff] text-white p-6 ${className}`}
        role="img"
        aria-label={alt}
      >
        <ImageIcon className="w-7 h-7 mb-3 opacity-70" aria-hidden="true" />
        <span className="font-medium tracking-tight text-lg leading-snug">{client}</span>
        {meta && (
          <span className="text-white/70 text-xs mt-2 font-medium">
            {meta.venue} · {meta.date}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setErrored(true)}
      className={`${contain ? "object-contain" : "object-cover"} ${className}`}
    />
  );
}
