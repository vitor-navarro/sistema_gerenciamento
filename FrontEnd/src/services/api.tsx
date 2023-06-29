import { parseCookies } from "nookies";

const { "sistema_gerenciamento.token": token } = parseCookies();

export const api = (url: string, options: RequestInit = {}): Promise<Response> => {
  if (token) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  options.headers = {
    ...options.headers,
    "Content-Type": "application/json",
  };

  const baseURL = process.env.API_BASE_URL;

  if(baseURL && !url.includes(baseURL)){
    url = baseURL + url;
  }

  return fetch(url, options);
};