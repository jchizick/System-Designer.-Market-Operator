import type { CSSProperties, SVGProps } from "react";

type FrozenCandle = {
  time: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
};

type MarketOverviewSnapshotSvgProps = SVGProps<SVGSVGElement>;

const frozenCandles: FrozenCandle[] = [
  { time: "09:30", open: 5238.14, high: 5243.52, low: 5231.42, close: 5241.86, volume: 62 },
  { time: "09:45", open: 5241.86, high: 5248.28, low: 5237.94, close: 5246.72, volume: 71 },
  { time: "10:00", open: 5246.72, high: 5250.16, low: 5239.68, close: 5242.58, volume: 58 },
  { time: "10:15", open: 5242.58, high: 5244.92, low: 5234.3, close: 5236.44, volume: 66 },
  { time: "10:30", open: 5236.44, high: 5245.76, low: 5233.88, close: 5243.2, volume: 53 },
  { time: "10:45", open: 5243.2, high: 5252.62, low: 5240.78, close: 5250.38, volume: 82 },
  { time: "11:00", open: 5250.38, high: 5258.4, low: 5247.84, close: 5256.92, volume: 91 },
  { time: "11:15", open: 5256.92, high: 5261.26, low: 5251.68, close: 5254.16, volume: 73 },
  { time: "11:30", open: 5254.16, high: 5257.44, low: 5248.3, close: 5250.64, volume: 64 },
  { time: "11:45", open: 5250.64, high: 5255.18, low: 5246.92, close: 5253.72, volume: 55 },
  { time: "12:00", open: 5253.72, high: 5262.06, low: 5251.14, close: 5259.88, volume: 76 },
  { time: "12:15", open: 5259.88, high: 5267.32, low: 5258.1, close: 5264.52, volume: 88 },
  { time: "12:30", open: 5264.52, high: 5268.74, low: 5259.26, close: 5261.18, volume: 68 },
  { time: "12:45", open: 5261.18, high: 5265.42, low: 5255.72, close: 5257.86, volume: 57 },
  { time: "13:00", open: 5257.86, high: 5264.08, low: 5254.44, close: 5262.9, volume: 61 },
  { time: "13:15", open: 5262.9, high: 5271.66, low: 5260.12, close: 5269.34, volume: 84 },
  { time: "13:30", open: 5269.34, high: 5276.28, low: 5266.2, close: 5274.62, volume: 96 },
  { time: "13:45", open: 5274.62, high: 5278.14, low: 5268.8, close: 5270.36, volume: 78 },
  { time: "14:00", open: 5270.36, high: 5273.08, low: 5262.42, close: 5265.24, volume: 81 },
  { time: "14:15", open: 5265.24, high: 5270.88, low: 5261.7, close: 5268.96, volume: 63 },
  { time: "14:30", open: 5268.96, high: 5277.52, low: 5266.18, close: 5275.48, volume: 87 },
  { time: "14:45", open: 5275.48, high: 5283.26, low: 5272.56, close: 5280.92, volume: 103 },
  { time: "15:00", open: 5280.92, high: 5285.7, low: 5275.78, close: 5277.88, volume: 93 },
  { time: "15:15", open: 5277.88, high: 5281.34, low: 5270.22, close: 5272.6, volume: 89 },
  { time: "15:30", open: 5272.6, high: 5279.84, low: 5269.46, close: 5278.28, volume: 74 },
  { time: "15:45", open: 5278.28, high: 5288.9, low: 5276.12, close: 5286.74, volume: 111 },
  { time: "16:00", open: 5286.74, high: 5294.38, low: 5283.86, close: 5291.42, volume: 124 },
  { time: "16:15", open: 5291.42, high: 5298.82, low: 5288.4, close: 5296.16, volume: 118 },
  { time: "16:30", open: 5296.16, high: 5299.58, low: 5290.74, close: 5293.84, volume: 96 },
  { time: "16:45", open: 5293.84, high: 5302.26, low: 5291.62, close: 5300.68, volume: 132 },
  { time: "17:00", open: 5300.68, high: 5306.44, low: 5297.34, close: 5304.92, volume: 141 },
  { time: "17:15", open: 5304.92, high: 5311.28, low: 5301.86, close: 5308.37, volume: 153 }
] as const;

const viewBox = {
  width: 210,
  height: 75,
  chartX: 8,
  chartY: 7,
  chartWidth: 174,
  chartHeight: 48,
  volumeY: 60,
  volumeHeight: 8
} as const;

const ranges = ["1D", "5D", "1M", "3M", "6M", "YTD"] as const;

function scaleLinear(value: number, domainMin: number, domainMax: number, rangeMin: number, rangeMax: number) {
  if (domainMax === domainMin) {
    return (rangeMin + rangeMax) / 2;
  }

  return rangeMax - ((value - domainMin) / (domainMax - domainMin)) * (rangeMax - rangeMin);
}

export function MarketOverviewCandlesOnlySvg({ className, style, ...props }: MarketOverviewSnapshotSvgProps) {
  const lows = frozenCandles.map((candle) => candle.low);
  const highs = frozenCandles.map((candle) => candle.high);
  const minPrice = Math.floor((Math.min(...lows) - 6) / 10) * 10;
  const maxPrice = Math.ceil((Math.max(...highs) + 6) / 10) * 10;
  const chart = {
    width: 190,
    height: 96,
    x: 6,
    y: 6,
    chartWidth: 178,
    chartHeight: 84
  } as const;
  const candleStep = chart.chartWidth / frozenCandles.length;
  const candleWidth = Math.max(2.4, candleStep * 0.5);
  const responsiveStyle: CSSProperties = {
    display: "block",
    height: "96px",
    maxWidth: "100%",
    width: "190px",
    ...style
  };

  return (
    <svg
      aria-label="Market Overview SPX candle-only preview"
      className={className}
      role="img"
      style={responsiveStyle}
      viewBox={`0 0 ${chart.width} ${chart.height}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <filter id="marketOverviewCandlesOnlyGlow" colorInterpolationFilters="sRGB" x="-24%" y="-24%" width="148%" height="148%">
          <feGaussianBlur stdDeviation="1.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g shapeRendering="crispEdges">
        {frozenCandles.map((candle, index) => {
          const x = chart.x + index * candleStep + candleStep / 2;
          const wickHighY = scaleLinear(candle.high, minPrice, maxPrice, chart.y, chart.y + chart.chartHeight);
          const wickLowY = scaleLinear(candle.low, minPrice, maxPrice, chart.y, chart.y + chart.chartHeight);
          const openY = scaleLinear(candle.open, minPrice, maxPrice, chart.y, chart.y + chart.chartHeight);
          const closeY = scaleLinear(candle.close, minPrice, maxPrice, chart.y, chart.y + chart.chartHeight);
          const isUp = candle.close >= candle.open;
          const bodyY = Math.min(openY, closeY);
          const bodyHeight = Math.max(Math.abs(closeY - openY), 2.4);

          return (
            <g key={`${candle.time}-${candle.close}`}>
              <path
                d={`M${x} ${wickHighY}V${wickLowY}`}
                stroke={isUp ? "rgba(102, 217, 157, 0.78)" : "rgba(102, 217, 157, 0.4)"}
                strokeWidth="1.25"
                vectorEffect="non-scaling-stroke"
              />
              <rect
                x={x - candleWidth / 2}
                y={bodyY}
                width={candleWidth}
                height={bodyHeight}
                fill={isUp ? "rgba(209, 216, 213, 0.9)" : "rgba(17, 23, 25, 0.94)"}
                filter={isUp ? "url(#marketOverviewCandlesOnlyGlow)" : undefined}
                stroke={isUp ? "rgba(102, 217, 157, 0.84)" : "rgba(102, 217, 157, 0.48)"}
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

export function MarketOverviewSnapshotSvg({ className, style, ...props }: MarketOverviewSnapshotSvgProps) {
  const lows = frozenCandles.map((candle) => candle.low);
  const highs = frozenCandles.map((candle) => candle.high);
  const maxVolume = Math.max(...frozenCandles.map((candle) => candle.volume));
  const minPrice = Math.floor((Math.min(...lows) - 6) / 10) * 10;
  const maxPrice = Math.ceil((Math.max(...highs) + 6) / 10) * 10;
  const candleStep = viewBox.chartWidth / frozenCandles.length;
  const candleWidth = Math.max(2, candleStep * 0.48);
  const lastCandle = frozenCandles[frozenCandles.length - 1];
  const firstCandle = frozenCandles[0];
  const netChange = lastCandle.close - firstCandle.open;
  const netChangePercent = netChange / firstCandle.open * 100;
  const lastPriceY = scaleLinear(lastCandle.close, minPrice, maxPrice, viewBox.chartY, viewBox.chartY + viewBox.chartHeight);
  const responsiveStyle: CSSProperties = {
    display: "block",
    height: "75px",
    maxWidth: "100%",
    width: "210px",
    ...style
  };

  return (
    <svg
      aria-label="Frozen Market Overview SPX candlestick snapshot"
      className={className}
      role="img"
      style={responsiveStyle}
      viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <linearGradient id="marketOverviewSnapshotBg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#080d0f" />
          <stop offset="62%" stopColor="#0b1113" />
          <stop offset="100%" stopColor="#070a0b" />
        </linearGradient>
        <filter id="marketOverviewSnapshotGlow" colorInterpolationFilters="sRGB" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width={viewBox.width} height={viewBox.height} rx="5" fill="url(#marketOverviewSnapshotBg)" />
      <rect x="4" y="4" width={viewBox.width - 8} height={viewBox.height - 8} rx="3" fill="rgba(2, 6, 7, 0.24)" stroke="rgba(121, 139, 133, 0.15)" />

      {/* <g fontFamily="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace">
        <text x="32" y="40" fill="#d8e1dd" fontSize="14" fontWeight="700" letterSpacing="0">
          MARKET OVERVIEW // SPX
        </text>
        <text x="32" y="58" fill="rgba(177, 188, 184, 0.72)" fontSize="10" letterSpacing="0">
          15M CANDLES / FROZEN SESSION ARTIFACT / MARKET COMMAND
        </text>
        <text x="514" y="40" fill="#e2eae7" fontSize="18" fontWeight="700" textAnchor="end" letterSpacing="0">
          {formatPrice(lastCandle.close)}
        </text>
        <text x="530" y="40" fill="#66d99d" fontSize="12" fontWeight="700" filter="url(#marketOverviewSnapshotGlow)" letterSpacing="0">
          +{netChange.toFixed(2)} / +{netChangePercent.toFixed(2)}%
        </text>
        <text x="530" y="58" fill="rgba(102, 217, 157, 0.72)" fontSize="10" letterSpacing="0">
          RISK-ON DRIFT CONFIRMED
        </text>
      </g> */}

      <g shapeRendering="crispEdges">
        {[0, 1, 2, 3, 4].map((index) => {
          const y = viewBox.chartY + index * (viewBox.chartHeight / 4);
          const price = maxPrice - index * ((maxPrice - minPrice) / 4);

          return (
            <g key={`horizontal-grid-${price}`}>
              <path
                d={`M${viewBox.chartX} ${y}H${viewBox.chartX + viewBox.chartWidth}`}
                stroke="rgba(129, 145, 139, 0.11)"
                vectorEffect="non-scaling-stroke"
              />
              <text
                x={viewBox.chartX + viewBox.chartWidth + 4}
                y={y + 2}
                fill="rgba(177, 188, 184, 0.58)"
                fontFamily="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
                fontSize="3.6"
                letterSpacing="0"
              >
                {Math.round(price).toLocaleString("en-US")}
              </text>
            </g>
          );
        })}

        {[0, 6, 12, 18, 24, 30].map((candleIndex) => {
          const x = viewBox.chartX + candleIndex * candleStep + candleStep / 2;

          return (
            <path
              key={`vertical-grid-${candleIndex}`}
              d={`M${x} ${viewBox.chartY}V${viewBox.chartY + viewBox.chartHeight}`}
              stroke="rgba(129, 145, 139, 0.075)"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
      </g>

      <path
        d={`M${viewBox.chartX} ${lastPriceY}H${viewBox.chartX + viewBox.chartWidth}`}
        stroke="rgba(102, 217, 157, 0.34)"
        strokeDasharray="4 6"
        vectorEffect="non-scaling-stroke"
      />
      <rect x={viewBox.chartX + viewBox.chartWidth + 3} y={lastPriceY - 4} width="21" height="8" rx="1.5" fill="rgba(102, 217, 157, 0.14)" stroke="rgba(102, 217, 157, 0.45)" />
      <text
        x={viewBox.chartX + viewBox.chartWidth + 13.5}
        y={lastPriceY + 1.6}
        fill="#8ff0b7"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
        fontSize="3.6"
        fontWeight="700"
        letterSpacing="0"
        textAnchor="middle"
      >
        {lastCandle.close.toFixed(2)}
      </text>

      <g>
        {frozenCandles.map((candle, index) => {
          const x = viewBox.chartX + index * candleStep + candleStep / 2;
          const wickHighY = scaleLinear(candle.high, minPrice, maxPrice, viewBox.chartY, viewBox.chartY + viewBox.chartHeight);
          const wickLowY = scaleLinear(candle.low, minPrice, maxPrice, viewBox.chartY, viewBox.chartY + viewBox.chartHeight);
          const openY = scaleLinear(candle.open, minPrice, maxPrice, viewBox.chartY, viewBox.chartY + viewBox.chartHeight);
          const closeY = scaleLinear(candle.close, minPrice, maxPrice, viewBox.chartY, viewBox.chartY + viewBox.chartHeight);
          const isUp = candle.close >= candle.open;
          const bodyY = Math.min(openY, closeY);
          const bodyHeight = Math.max(Math.abs(closeY - openY), 2);
          const volumeHeight = candle.volume / maxVolume * viewBox.volumeHeight;

          return (
            <g key={`${candle.time}-${candle.close}`}>
              <rect
                x={x - candleWidth / 2}
                y={viewBox.volumeY + viewBox.volumeHeight - volumeHeight}
                width={candleWidth}
                height={volumeHeight}
                fill={isUp ? "rgba(102, 217, 157, 0.18)" : "rgba(154, 163, 160, 0.1)"}
              />
              <path
                d={`M${x} ${wickHighY}V${wickLowY}`}
                stroke={isUp ? "rgba(102, 217, 157, 0.72)" : "rgba(102, 217, 157, 0.42)"}
                strokeWidth="1.15"
                vectorEffect="non-scaling-stroke"
              />
              <rect
                x={x - candleWidth / 2}
                y={bodyY}
                width={candleWidth}
                height={bodyHeight}
                fill={isUp ? "rgba(209, 216, 213, 0.88)" : "rgba(17, 23, 25, 0.94)"}
                stroke={isUp ? "rgba(102, 217, 157, 0.8)" : "rgba(102, 217, 157, 0.46)"}
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            </g>
          );
        })}
      </g>

      <g fontFamily="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" fontSize="3.6" letterSpacing="0">
        <text x={viewBox.chartX} y="72" fill="rgba(177, 188, 184, 0.58)">
          09:30
        </text>
        <text x={viewBox.chartX + viewBox.chartWidth / 2} y="72" fill="rgba(177, 188, 184, 0.58)" textAnchor="middle">
          13:30
        </text>
        <text x={viewBox.chartX + viewBox.chartWidth} y="72" fill="rgba(177, 188, 184, 0.58)" textAnchor="end">
          17:15
        </text>
        <text x="8" y="65" fill="rgba(177, 188, 184, 0.42)">
          VOL
        </text>
      </g>

      {/* <g fontFamily="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" fontSize="10" fontWeight="700" letterSpacing="0">
        {ranges.map((range, index) => {
          const pillX = 306 + index * 48;
          const isActive = index === 0;

          return (
            <g key={range}>
              <rect
                x={pillX}
                y="388"
                width="38"
                height="18"
                rx="4"
                fill={isActive ? "rgba(102, 217, 157, 0.16)" : "rgba(14, 20, 22, 0.82)"}
                stroke={isActive ? "rgba(102, 217, 157, 0.5)" : "rgba(121, 139, 133, 0.18)"}
              />
              <text x={pillX + 19} y="401" fill={isActive ? "#8ff0b7" : "rgba(177, 188, 184, 0.62)"} textAnchor="middle">
                {range}
              </text>
            </g>
          );
        })}
      </g> */}
    </svg>
  );
}
