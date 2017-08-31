import { transformObjectInUrl } from "./helpers";

const options = (method, data) => {
  const { token } = localStorage;
  const Authorization = token ? { Authorization: `Bearer ${token}` } : {};
  const body = data ? { body: JSON.stringify(data) } : {};
  return {
    method,
    headers: {
      "Content-Type": "application/json",
      ...Authorization
    },
    ...body
  };
};

const API_URL = process.env.REACT_APP_API_URL;

export function GET(url, data) {
  return fetch(
    `${API_URL}/${url}${data ? transformObjectInUrl(data) : ""}`,
    options("get")
  ).then(x => x.json());
}

export function POST(url, data) {
  return fetch(`${API_URL}/${url}`, options("post", data)).then(x => x.json());
}

export function PUT(url, data) {
  return fetch(`${API_URL}/${url}`, options("put", data)).then(x => x.json());
}

export function DELETE(url, data) {
  return fetch(`${API_URL}/${url}`, options("delete", data)).then(x =>
    x.json()
  );
}
