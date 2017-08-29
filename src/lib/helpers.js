export function transformSearch(s) {
  return s.replace("?", "").split("&").map(elem => elem.split("=")).reduce(
    (result, next) => ({
      ...result,
      [next[0]]: next[1]
    }),
    {}
  );
}
