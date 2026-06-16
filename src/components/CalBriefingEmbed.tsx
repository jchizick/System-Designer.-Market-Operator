import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export function CalBriefingEmbed() {
  useEffect(() => {
    (async function initializeCal() {
      const cal = await getCalApi({ namespace: 'schedule-briefing' });

      cal('ui', {
        theme: 'dark',
        cssVarsPerTheme: {
          light: {
            'cal-brand': '#00E5A8',
          },
          dark: {
            'cal-brand': '#00E5A8',
          },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return (
    <div className="briefing-cal-embed h-full min-h-[700px] w-full overflow-hidden lg:min-h-[760px]">
      <Cal
        namespace="schedule-briefing"
        calLink="chizick/schedule-briefing"
        style={{ width: '100%', height: '100%', overflow: 'scroll' }}
        config={{
          layout: 'month_view',
          useSlotsViewOnSmallScreen: 'true',
          theme: 'dark',
        }}
      />
    </div>
  );
}
