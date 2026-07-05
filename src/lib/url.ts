// Prefix an absolute path with the configured base, so internal links
// work both under the interim /schroedingers.blog/ base and at the
// domain root later (BASE_URL becomes '/').
export const url = (path: string): string =>
  import.meta.env.BASE_URL.replace(/\/$/, '') + path;
