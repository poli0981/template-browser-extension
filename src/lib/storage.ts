// Thin typed wrapper around chrome.storage.sync. Replace with chrome.storage.local
// if you need larger quota or do not want cross-device sync.

export async function getSetting<T = unknown>(key: string): Promise<T | undefined> {
  const result = await chrome.storage.sync.get(key);
  return result[key] as T | undefined;
}

export async function setSetting<T = unknown>(key: string, value: T): Promise<void> {
  await chrome.storage.sync.set({ [key]: value });
}

export async function removeSetting(key: string): Promise<void> {
  await chrome.storage.sync.remove(key);
}

export async function clearSettings(): Promise<void> {
  await chrome.storage.sync.clear();
}
