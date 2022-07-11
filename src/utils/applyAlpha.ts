export const applyAlpha = (color: string, alpha: number) => {
  if (alpha === 0) {
    return `${color}00`;
  }

  const alpha256 = (alpha * 255).toFixed();
  const alphaBase16 = Number(alpha256).toString(16); // we're ensuring this is a number then converting
  const paddedAlpha =
    alphaBase16.length === 1 ? alphaBase16.padStart(1) : alphaBase16;
  return color.concat('', paddedAlpha);
};
