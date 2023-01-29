type CallbackType = (response: any, error?: string | null) => void;

export const fetchREST = <T>(url: RequestInfo, request?: RequestInit, callback?: CallbackType) => {
  return fetch(url, request)
    .then((raw) => raw.json())
    .then((res) => (typeof callback === 'function' ? callback(res, null) : res))
    .catch((err) => (typeof callback === 'function' ? callback(null, err) : err)) as Promise<T>;
};
