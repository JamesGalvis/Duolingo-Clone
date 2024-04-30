export const fetcher = (...args: [string, RequestInit?]) =>
  fetch(...args).then((res) => res.json())
