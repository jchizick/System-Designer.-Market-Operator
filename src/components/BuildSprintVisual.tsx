import { InlineSvgVisual } from './InlineSvgVisual';
import buildSprintSvg from '../assets/svgexport-12b.svg?raw';

export function BuildSprintVisual() {
  return (
    <div
      className="service-engagement-visual service-engagement-visual--build service-build-visual"
      aria-hidden="true"
    >
      <div className="service-build-visual-grid" />
      <InlineSvgVisual svg={buildSprintSvg} />
    </div>
  );
}
