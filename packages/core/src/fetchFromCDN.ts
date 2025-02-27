export interface FetchFromCDNOptions extends RequestInit {
  local?: boolean;
}

export default function fetchFromCDN<T>(
  path: string,
  version: string = 'latest',
  options: FetchFromCDNOptions = {},
): Promise<T[]> {
  if (__DEV__) {
    if (!path || path.slice(-5) !== '.json') {
      throw new Error('A valid JSON dataset is required to fetch.');
    }

    if (!version) {
      throw new Error('A valid release version is required.');
    }
  }

  const { local = false, ...opts } = options;
  const storage = local ? localStorage : sessionStorage;
  const cacheKey = `emojibase/${version}/${path}`;
  const cachedData = storage.getItem(cacheKey);

  // Check the cache first
  if (cachedData) {
    try {
      return Promise.resolve(JSON.parse(cachedData));
    } catch (error) {
      return Promise.resolve([]);
    }
  }

  return fetch(`https://cdn.jsdelivr.net/npm/emojibase-data@${version}/${path}`, {
    credentials: 'omit',
    mode: 'cors',
    redirect: 'error',
    ...opts,
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load Emojibase dataset.');
      }

      return response.json();
    })
    .then(data => {
      try {
        storage.setItem(cacheKey, JSON.stringify(data));
      } catch (error) {
        // Do not allow quota errors to break the app
      }

      return data;
    });
}
