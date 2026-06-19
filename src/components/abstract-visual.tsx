/**
 * Generative black & white visual with a single electric-blue accent.
 * Used in place of stock photography (no external images) for quote/feature
 * blocks. Variants are deterministic SVG — safe to render on the server.
 */
export function AbstractVisual({
  variant = "arcs",
  className = "",
}: {
  variant?: "arcs" | "grid" | "mesh";
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="presentation"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="400" fill="#000000" />

      {variant === "arcs" &&
        Array.from({ length: 9 }).map((_, i) => (
          <circle
            key={i}
            cx="200"
            cy="200"
            r={24 + i * 22}
            fill="none"
            stroke={i === 4 ? "#0045FF" : "rgba(255,255,255,0.16)"}
            strokeWidth={i === 4 ? 3 : 1}
          />
        ))}

      {variant === "grid" && (
        <>
          {Array.from({ length: 11 }).map((_, i) => (
            <line
              key={`v${i}`}
              x1={i * 40}
              y1="0"
              x2={i * 40}
              y2="400"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
            />
          ))}
          {Array.from({ length: 11 }).map((_, i) => (
            <line
              key={`h${i}`}
              x1="0"
              y1={i * 40}
              x2="400"
              y2={i * 40}
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
            />
          ))}
          <rect x="160" y="160" width="80" height="80" fill="#0045FF" />
        </>
      )}

      {variant === "mesh" &&
        Array.from({ length: 13 }).map((_, i) => (
          <line
            key={i}
            x1={i * 32}
            y1="0"
            x2="400"
            y2={i * 32}
            stroke={i === 6 ? "#0045FF" : "rgba(255,255,255,0.14)"}
            strokeWidth={i === 6 ? 2 : 1}
          />
        ))}
    </svg>
  );
}
