const r4 = (n: number) => Math.round(n * 1e4) / 1e4;

export function generateGearPath(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  holeR: number,
  teeth: number,
  startAngle = -Math.PI / 2,
): string {
  const hr = r4(holeR);
  const holePath = `M ${cx} ${cy - hr} A ${hr} ${hr} 0 1 1 ${cx} ${cy + hr} A ${hr} ${hr} 0 1 1 ${cx} ${cy - hr}`;
  const step = (Math.PI * 2) / teeth;
  const toothTopW = step * 0.35;
  const toothBotW = step * 0.53;
  let d = '';

  for (let i = 0; i < teeth; i++) {
    const θ = startAngle + i * step;
    const blA = θ - toothBotW / 2;
    const brA = θ + toothBotW / 2;
    const tlA = θ - toothTopW / 2;
    const trA = θ + toothTopW / 2;
    const mlA = θ - toothTopW * 0.7;
    const mrA = θ + toothTopW * 0.7;
    const midR = (innerR + outerR) / 2;

    const cmd = i === 0 ? 'M' : 'L';
    d += `${cmd} ${r4(cx + Math.cos(blA) * innerR)} ${r4(cy + Math.sin(blA) * innerR)}`;
    d += ` Q ${r4(cx + Math.cos(mlA) * midR)} ${r4(cy + Math.sin(mlA) * midR)} ${r4(cx + Math.cos(tlA) * outerR)} ${r4(cy + Math.sin(tlA) * outerR)}`;
    d += ` L ${r4(cx + Math.cos(trA) * outerR)} ${r4(cy + Math.sin(trA) * outerR)}`;
    d += ` Q ${r4(cx + Math.cos(mrA) * midR)} ${r4(cy + Math.sin(mrA) * midR)} ${r4(cx + Math.cos(brA) * innerR)} ${r4(cy + Math.sin(brA) * innerR)}`;
  }
  d += 'Z';
  return d + ' ' + holePath;
}

const T1 = 22, T2 = 14;
const T3 = 20, T4 = 16;

const phi1 = Math.atan2(14.37, -63.85);
const phi2 = Math.atan2(-18.73, 69.52);

export const gear1Path = generateGearPath(50, 50, 40 + 50 / T1, 40 - 62.5 / T1, 13, T1, phi1);
export const gear2Path = generateGearPath(50, 50, 40 + 50 / T2, 40 - 62.5 / T2, 11, T2, phi1 + Math.PI - Math.PI / T2);
export const gear3Path = generateGearPath(50, 50, 40 + 50 / T3, 40 - 62.5 / T3, 12, T3, phi2);
export const gear4Path = generateGearPath(50, 50, 40 + 50 / T4, 40 - 62.5 / T4, 10, T4, phi2 + Math.PI - Math.PI / T4);
