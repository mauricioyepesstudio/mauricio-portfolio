export type BrandStat = {
  value: string;
  lines: [string, string];
  compact?: boolean;
};

export const brandStats: BrandStat[] = [
  {
    value: "12+",
    lines: ["Years of", "Experience"],
  },
  {
    value: "100+",
    lines: ["Brands Collaborated", "With"],
  },
  {
    value: "U.S. + LATAM",
    lines: ["Markets", "Served"],
    compact: true,
  },
  {
    value: "EN + ES",
    lines: ["Bilingual", "Communication"],
    compact: true,
  },
];
