type Point = { label: string; value: number };

/** Dependency-free SVG line chart used for score progression panels. */
export function LineChart({
  data,
  min = 50,
  max = 100,
  ticks = [50, 65, 80, 100],
  className,
}: {
  data: Point[];
  min?: number;
  max?: number;
  ticks?: number[];
  className?: string;
}) {
  const width = 640;
  const height = 220;
  const padding = { top: 12, right: 16, bottom: 26, left: 34 };
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;

  const x = (index: number) =>
    padding.left + (plotWidth * index) / Math.max(data.length - 1, 1);
  const y = (value: number) =>
    padding.top + plotHeight * (1 - (value - min) / (max - min));

  const line = data.map((point, index) => `${x(index)},${y(point.value)}`).join(" ");
  const area = `${padding.left},${padding.top + plotHeight} ${line} ${
    padding.left + plotWidth
  },${padding.top + plotHeight}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      role="img"
      aria-label="Average batch score progression"
    >
      <defs>
        <linearGradient id="chart-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {ticks.map((tick) => (
        <g key={tick}>
          <line
            x1={padding.left}
            x2={width - padding.right}
            y1={y(tick)}
            y2={y(tick)}
            stroke="var(--border)"
            strokeDasharray="3 4"
          />
          <text
            x={padding.left - 8}
            y={y(tick) + 4}
            textAnchor="end"
            fontSize="10"
            fill="var(--muted-foreground)"
          >
            {tick}
          </text>
        </g>
      ))}

      <polygon points={area} fill="url(#chart-fill)" />
      <polyline
        points={line}
        fill="none"
        stroke="var(--gold)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {data.map((point, index) => (
        <g key={point.label}>
          <circle cx={x(index)} cy={y(point.value)} r="3.5" fill="var(--gold)" />
          <text
            x={x(index)}
            y={height - 8}
            textAnchor="middle"
            fontSize="10"
            fill="var(--muted-foreground)"
          >
            {point.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
