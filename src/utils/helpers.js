/**
|--------------------------------------------------
| STRING
|--------------------------------------------------
*/

function snakeToCamel(str) {
  if (typeof str !== 'string') {
    throw new TypeError(
      `expected argument of type string, received ${typeof str}`,
    );
  }

  return str.replace(/_[a-z]/g, (char) => char[1].toUpperCase());
}

function camelToSnake(str) {
  if (typeof str !== 'string') {
    throw new TypeError(
      `expected argument of type string, received ${typeof str}`,
    );
  }

  return str.replace(/[A-Z]/g, (char) => `_${char.toLowerCase()}`);
}

/**
|--------------------------------------------------
| OBJECT
|--------------------------------------------------
*/

function transformKey(fn) {
  return function transformVariant(obj) {
    if (typeof obj !== 'object' || obj === null) return obj;

    if (Array.isArray(obj)) return obj.map(transformVariant);

    return Object.entries(obj).reduce(
      (acc, [k, v]) => ({
        ...acc,
        [fn(k)]: transformVariant(v),
      }),
      {},
    );
  };
}

export const ensureCamel = transformKey(snakeToCamel);

export const ensureSnake = transformKey(camelToSnake);

/**
|--------------------------------------------------
| REQUESTS
|--------------------------------------------------
*/

async function request(method, url, body = null) {
  const options = {
    method,
    headers: { Accept: 'application/json' },
  };
  if (body) options.body = JSON.stringify(body);

  const req = await fetch(url, options);
  const res = await req.json();
  return ensureCamel(res);
}

export function get(url, payload = null) {
  const urlWithSearch = payload
    ? `${url}?${new URLSearchParams(payload)}`
    : url;
  return request('GET', urlWithSearch);
}

export function post(url, payload = null) {
  const body = ensureSnake(payload);
  return request('POST', url, body);
}

export function put(url, payload = null) {
  const body = ensureSnake(payload);
  return request('PUT', url, body);
}

export function del(url, payload = null) {
  const body = ensureSnake(payload);
  return request('DELETE', url, body);
}
