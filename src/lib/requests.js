const options = (method, data) => {
  const { token } = localStorage;
  const Authorization = token ? { Authorization: `Bearer ${token}` } : {};
  return {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...Authorization
    },
    body: JSON.stringify(data)
  };
};

const API_URL = process.env.REACT_APP_API_URL;

export function GET(url, data) {
  return fetch(`${API_URL}/${url}`, options('get', data)).then(x => x.json());
}

export function POST(url, data) {
  return fetch(`${API_URL}/${url}`, options('post', data)).then(x => x.json());
}

export function PUT(url, data) {
  return fetch(`${API_URL}/${url}`, options('put', data)).then(x => x.json());
}

export function DELETE(url, data) {
  return fetch(`${API_URL}/${url}`, options('delete', data)).then(x =>
    x.json()
  );
}
