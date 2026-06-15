export function DiagnosticSprintVisual() {
  return (
    <div
      className="service-engagement-visual service-engagement-visual--diagnostic service-diagnostic-visual"
      aria-hidden="true"
    >
      <div className="service-diagnostic-visual-grid" />
      <svg
        viewBox="0 0 360 172"
        className="service-diagnostic-svg"
        focusable="false"
        preserveAspectRatio="xMidYMid meet"
      >
        <path className="diagnostic-sweep" d="M226 86 L282 34 A76 76 0 0 1 299 113 Z" />
        <path className="diagnostic-sweep-edge" d="M226 86 L299 113" />

        <g className="diagnostic-radar">
          <circle cx="226" cy="86" r="76" className="diagnostic-radar-ring diagnostic-radar-ring--outer" />
          <circle cx="226" cy="86" r="58" className="diagnostic-radar-ring" />
          <circle cx="226" cy="86" r="40" className="diagnostic-radar-ring" />
          <circle cx="226" cy="86" r="22" className="diagnostic-radar-ring" />
          <line x1="150" y1="86" x2="302" y2="86" className="diagnostic-radar-axis" />
          <line x1="226" y1="10" x2="226" y2="162" className="diagnostic-radar-axis" />
          <line x1="172" y1="32" x2="280" y2="140" className="diagnostic-radar-axis diagnostic-radar-axis--muted" />
          <line x1="280" y1="32" x2="172" y2="140" className="diagnostic-radar-axis diagnostic-radar-axis--muted" />
          <circle cx="226" cy="86" r="4" className="diagnostic-center-core" />
          <circle cx="226" cy="86" r="10" className="diagnostic-center-glow" />
        </g>

        <g className="diagnostic-connector diagnostic-connector--scope">
          <rect x="18" y="36" width="4" height="4" className="diagnostic-label-node" />
          <text x="30" y="42" className="diagnostic-label">UNCLEAR SCOPE</text>
          <path d="M105 39 H136 L193 52" className="diagnostic-connector-line" />
        </g>

        <g className="diagnostic-connector diagnostic-connector--manual">
          <rect x="18" y="81" width="4" height="4" className="diagnostic-label-node" />
          <text x="30" y="87" className="diagnostic-label">MANUAL WORK</text>
          <path d="M96 84 H136 L166 88" className="diagnostic-connector-line" />
        </g>

        <g className="diagnostic-connector diagnostic-connector--data">
          <rect x="18" y="126" width="4" height="4" className="diagnostic-label-node" />
          <text x="30" y="132" className="diagnostic-label">FRAGMENTED DATA</text>
          <path d="M118 129 H150 L207 124" className="diagnostic-connector-line" />
        </g>

        <g className="diagnostic-target diagnostic-target--scope">
          <circle cx="193" cy="52" r="10" className="diagnostic-target-halo" />
          <circle cx="193" cy="52" r="3.2" className="diagnostic-target-core" />
          <path d="M183 43 h7 M183 43 v7 M203 43 h-7 M203 43 v7 M183 61 h7 M183 61 v-7 M203 61 h-7 M203 61 v-7" className="diagnostic-target-bracket" />
        </g>

        <g className="diagnostic-target diagnostic-target--manual">
          <circle cx="166" cy="88" r="9" className="diagnostic-target-halo" />
          <circle cx="166" cy="88" r="3" className="diagnostic-target-core" />
          <path d="M157 80 h6 M157 80 v6 M175 80 h-6 M175 80 v6 M157 96 h6 M157 96 v-6 M175 96 h-6 M175 96 v-6" className="diagnostic-target-bracket" />
        </g>

        <g className="diagnostic-target diagnostic-target--data">
          <circle cx="207" cy="124" r="9.5" className="diagnostic-target-halo" />
          <circle cx="207" cy="124" r="3.1" className="diagnostic-target-core" />
          <path d="M198 116 h6 M198 116 v6 M216 116 h-6 M216 116 v6 M198 132 h6 M198 132 v-6 M216 132 h-6 M216 132 v-6" className="diagnostic-target-bracket" />
        </g>
      </svg>
    </div>
  );
}
