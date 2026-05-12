import { getSetting, setSetting } from '@/lib/storage';

const form = document.querySelector<HTMLFormElement>('#options-form');
const input = document.querySelector<HTMLInputElement>('#setting-input');
const status = document.querySelector<HTMLParagraphElement>('#status');

async function load(): Promise<void> {
  const value = await getSetting('setting');
  if (input && typeof value === 'string') {
    input.value = value;
  }
}

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  void (async () => {
    if (input) {
      await setSetting('setting', input.value);
      if (status) status.textContent = 'Saved.';
    }
  })();
});

void load();
