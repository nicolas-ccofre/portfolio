/** Resolves a path in `public/` against Vite's configured base (e.g. "/portfolio/" on GitHub Pages). */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
