const API_URL = process.env.REACT_APP_API_URL;

export function login(username, password) {
  fetch(`${API_URL}/user`, {});
}
