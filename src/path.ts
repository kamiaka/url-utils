// join URL path.
export function joinPath(base: string, ...paths: string[]) {
  for (let i = 0; i < paths.length; i++) {
    base = base.replace(/\/+$/, '') + '/' + paths[i].replace(/^\/+/, '');
  }
  return base;
}
