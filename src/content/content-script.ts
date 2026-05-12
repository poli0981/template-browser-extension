// Content scripts run in the context of web pages. Keep them small and side-effect-free
// by default — add behavior only when activated by message or user action.

console.info('[content-script] loaded on', location.href);

export {};
