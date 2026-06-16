import { InlineSvgVisual } from './InlineSvgVisual';
import diagnosticSprintSvg from '../assets/diagnostic-sprint-3.svg?raw';

export function DiagnosticSprintVisual() {
  return (
    <div
      className="service-engagement-visual service-engagement-visual--diagnostic service-diagnostic-visual"
      aria-hidden="true"
    >
      <div className="service-diagnostic-visual-grid" />
      <InlineSvgVisual svg={diagnosticSprintSvg} />
    </div>
  );
}
