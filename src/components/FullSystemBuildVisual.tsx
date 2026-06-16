import { InlineSvgVisual } from './InlineSvgVisual';
import fullSystemBuildSvg from '../assets/full-system-build.svg?raw';

export function FullSystemBuildVisual() {
  return (
    <div
      className="service-engagement-visual service-engagement-visual--system service-system-visual"
      aria-hidden="true"
    >
      <div className="service-system-visual-grid" />
      <InlineSvgVisual svg={fullSystemBuildSvg} />
    </div>
  );
}
