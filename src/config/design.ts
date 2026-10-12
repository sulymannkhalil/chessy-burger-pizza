export const brandColors = {
  primary: "#FFC928",
  secondary: "#D83B32",
  dark: "#24201E",
  supporting: "#FDE8E5",
} as const;

export const motion = {
  durationFast: 0.2,
  durationBase: 0.45,
  durationSlow: 0.8,
  easeOut: "power2.out",
  easeInOut: "power2.inOut",
} as const;

export const layout = {
  containerMax: "1200px",
  containerWide: "1400px",
  sectionY: "clamp(4rem, 8vw, 7.5rem)",
  sectionYTight: "clamp(3rem, 6vw, 5rem)",
} as const;
