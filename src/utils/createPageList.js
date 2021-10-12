export function importAll(r) {
  return r.keys().map((fileName) => ({
    fileName,
    module: r(fileName),
  }));
}

export function createPageList(files, base) {
  return importAll(files).reduce((acc, cur) => {
    let slug = cur.fileName.substr(2).replace(/\.mdx$/, "");
    return {
      ...acc,
      [slug]: { ...cur.module.default, href: `/${base}/${slug}` },
    };
  }, {});
}
