type DividerVariant = "wave" | "curve" | "angle";
type DividerColor = "cream" | "white" | "charcoal" | "warm-white";

const colorMap: Record<DividerColor, string> = {
  cream: "oklch(0.974 0.026 90.1)",
  white: "oklch(1 0 0)",
  charcoal: "oklch(0.226 0 0)",
  "warm-white": "oklch(0.984 0.007 106.8)",
};

interface SectionDividerProps {
  variant?: DividerVariant;
  from?: DividerColor;
  to?: DividerColor;
  flip?: boolean;
  className?: string;
}

export function SectionDivider({
  variant = "wave",
  from = "white",
  to = "cream",
  flip = false,
  className = "",
}: SectionDividerProps) {
  const fromColor = colorMap[from];
  const toColor = colorMap[to];

  const paths: Record<DividerVariant, string> = {
    wave: "M0,64 C320,120 640,0 960,64 C1280,128 1440,32 1440,32 L1440,128 L0,128 Z",
    curve: "M0,96 Q720,0 1440,96 L1440,128 L0,128 Z",
    angle: "M0,96 L1440,32 L1440,128 L0,128 Z",
  };

  return (
    <div
      className={`relative -my-px w-full overflow-hidden leading-[0] ${className}`}
      style={{ backgroundColor: fromColor }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 128"
        preserveAspectRatio="none"
        className="block h-12 w-full sm:h-16 lg:h-20"
        style={flip ? { transform: "scaleY(-1)" } : undefined}
      >
        <path d={paths[variant]} fill={toColor} />
      </svg>
    </div>
  );
}
