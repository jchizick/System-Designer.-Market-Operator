const svgMonoFontStack =
  'var(--font-mono), "Geist Mono", "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace';

const sitePaletteReplacements: Array<[string, string]> = [
  ['#4ADE80', '#10B981'],
  ['#86EFAC', '#34D399'],
  ['#FFFFFF', '#D1FAE5'],
  ['#020604', '#070707'],
  ['#082012', '#06110D'],
  ['#0C2D19', '#071710'],
  ['rgba(74, 222, 128, 0.9)', 'rgba(52, 211, 153, 0.42)'],
  ['rgba(74, 222, 128, 0.6)', 'rgba(52, 211, 153, 0.24)'],
  ['rgba(74, 222, 128, 0.45)', 'rgba(16, 185, 129, 0.18)'],
  ['rgba(74, 222, 128, 0.35)', 'rgba(16, 185, 129, 0.13)'],
  ['rgba(74, 222, 128, 0.15)', 'rgba(16, 185, 129, 0.055)'],
  ['rgba(74, 222, 128, 0.1)', 'rgba(16, 185, 129, 0.045)'],
  ['rgba(74, 222, 128, 0.05)', 'rgba(16, 185, 129, 0.02)'],
  ['rgba(74, 222, 128, 0.04)', 'rgba(16, 185, 129, 0.035)'],
  ['rgba(74, 222, 128, 0)', 'rgba(16, 185, 129, 0)'],
];

function withSiteSvgPalette(svg: string) {
  return sitePaletteReplacements.reduce(
    (currentSvg, [source, target]) => currentSvg.replaceAll(source, target),
    svg,
  );
}

function withMonoSvgFont(svg: string) {
  const fontFamily = `font-family="${svgMonoFontStack}"`;

  if (svg.includes('font-family=')) {
    return svg;
  }

  return svg.replace('<svg ', `<svg ${fontFamily} `);
}

export function InlineSvgVisual({ svg }: { svg: string }) {
  const tunedSvg = withMonoSvgFont(withSiteSvgPalette(svg));

  return (
    <div
      className="service-exported-card-svg"
      dangerouslySetInnerHTML={{ __html: tunedSvg }}
    />
  );
}
