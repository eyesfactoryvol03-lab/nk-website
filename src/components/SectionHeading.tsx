interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm text-text-secondary tracking-widest uppercase font-sans">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 w-16 h-0.5 bg-primary ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
