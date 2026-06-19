/**
 * Repeating eyebrow label used across sections, e.g. "(us) (us) (us)" + hairline,
 * mirroring the editorial reference. Pure presentational, copy-driven.
 */
export function SectionLabel({
  label,
  repeat = 1,
}: {
  label: string;
  repeat?: number;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex gap-2 whitespace-nowrap">
        {Array.from({ length: repeat }).map((_, i) => (
          <span key={i} className="eyebrow lowercase">
            {label}
          </span>
        ))}
      </div>
      <span className="h-px flex-1 bg-white/15" />
    </div>
  );
}
