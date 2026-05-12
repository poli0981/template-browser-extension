// MV3 background service worker.
// Service workers terminate when idle — keep listeners at top-level so the worker
// can be re-instantiated and reattach handlers on wake.

chrome.runtime.onInstalled.addListener((details) => {
  console.info('[background] onInstalled', details.reason);
});

chrome.runtime.onStartup.addListener(() => {
  console.info('[background] onStartup');
});

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (typeof message === 'object' && message !== null && 'type' in message) {
    const { type } = message as { type: string };
    if (type === 'PING') {
      sendResponse({ type: 'PONG', timestamp: Date.now() });
      return false;
    }
  }
  return false;
});

export {};
