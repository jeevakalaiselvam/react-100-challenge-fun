export const generateSimilarColor = () => {
  const base = baseColors[Math.floor(Math.random() * baseColors.length)];
  const { h, s, l } = hexToHSL(base);

  const newH = (h + (Math.random() * 20 - 10) + 360) % 360;
  const newS = Math.min(100, Math.max(40, s * 100 + (Math.random() * 20 - 10)));
  const newL = Math.min(90, Math.max(40, l * 100 + (Math.random() * 20 - 10)));

  return hslToHex(newH, newS, newL);
};

export const generateDarkTextColorForLightBg = (hex, darkenPercent = 40) => {
  let newHex = hex ? hex : "#333333";
  const amt = Math.round(2.55 * darkenPercent);

  const R = Math.max(0, parseInt(newHex?.slice(1, 3), 16) - amt);
  const G = Math.max(0, parseInt(newHex?.slice(3, 5), 16) - amt);
  const B = Math.max(0, parseInt(newHex?.slice(5, 7), 16) - amt);

  return `#${[R, G, B].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
};

export const generateLightTextColorForLightBg = (hex, lightenPercent = 40) => {
  let newHex = hex ? hex : "#333333";
  const amt = Math.round(2.55 * lightenPercent);

  const R = Math.max(0, parseInt(newHex?.slice(1, 3), 16) + amt);
  const G = Math.max(0, parseInt(newHex?.slice(3, 5), 16) + amt);
  const B = Math.max(0, parseInt(newHex?.slice(5, 7), 16) + amt);

  return `#${[R, G, B].map((x) => x.toString(16).padStart(2, "0")).join("")}`;
};
