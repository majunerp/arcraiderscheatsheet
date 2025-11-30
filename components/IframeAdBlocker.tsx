'use client';

import { useEffect } from 'react';

export default function IframeAdBlocker() {
  useEffect(() => {
    // Inject CSS to hide ads within iframes
    const style = document.createElement('style');
    style.textContent = `
      iframe {
        /* Hide ad elements that might appear in MapGenie iframes */
      }

      /* Additional CSS injected via postMessage if iframe allows it */
    `;
    document.head.appendChild(style);

    // Attempt to communicate with iframe to hide ads (only works if same-origin)
    const hideAdsInIframe = () => {
      const iframes = document.querySelectorAll('iframe');
      iframes.forEach((iframe) => {
        try {
          // Try to access iframe content (will fail for cross-origin)
          const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
          if (iframeDoc) {
            const adElements = iframeDoc.querySelectorAll(
              '#blobby-left, [id*="google_ads"], [class*="ad-"], .btn-upgrade, [href*="upgrade"]'
            );
            adElements.forEach((el) => {
              (el as HTMLElement).style.display = 'none';
            });
          }
        } catch (e) {
          // Cross-origin iframe, can't access
          console.debug('Cannot access iframe content (cross-origin)');
        }
      });
    };

    // Try to hide ads when iframes load
    const observer = new MutationObserver(() => {
      hideAdsInIframe();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Initial attempt
    setTimeout(hideAdsInIframe, 1000);
    setTimeout(hideAdsInIframe, 3000);

    return () => {
      observer.disconnect();
      style.remove();
    };
  }, []);

  return null;
}
