const querystring = require("querystring");
export const getQueryParams = (obj: object) => querystring.stringify(obj);

export function urlWithQueryParams(url: string, object: any = {}) {
  if (!url) return "";

  const params = getQueryParams(object);

  return `${url}?${params}`;
}
