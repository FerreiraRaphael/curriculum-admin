export function transformSearch(s) {
  return s.replace("?", "").split("&").map(elem => elem.split("=")).reduce(
    (result, next) => ({
      ...result,
      [next[0]]: next[1]
    }),
    {}
  );
}

export function filterObjectFields(object, fields) {
  return fields.reduce(
    (result, field) => ({
      ...result,
      [field]: object[field]
    }),
    {}
  );
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
