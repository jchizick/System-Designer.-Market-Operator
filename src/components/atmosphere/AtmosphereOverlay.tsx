import { GlobalNoise } from './GlobalNoise';
import { GlobalScanlines } from './GlobalScanlines';

// Mounted once at the app root. Add or remove global atmosphere layers here.
export function AtmosphereOverlay() {
  return (
    <div className="atmosphere-overlay" aria-hidden="true">
      <GlobalNoise />
      {/* Scanlines are available for future tests, but currently disabled for readability. */}
      {/* <GlobalScanlines /> */}
    </div>
  );
}
