const btn = document.querySelector<HTMLButtonElement>('#action-btn');
const output = document.querySelector<HTMLPreElement>('#output');

btn?.addEventListener('click', () => {
  chrome.runtime.sendMessage({ type: 'PING' }, (response: unknown) => {
    if (output) {
      output.textContent = JSON.stringify(response, null, 2);
    }
  });
});
