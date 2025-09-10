import axios from "axios";

const http = axios.create({
  baseURL: "https://irongamesmockapilogin.com"
});

http.interceptors.response.use(
  (res) => res.data,
  (error) => Promise.reject(error)
);

export function profile() {
  return http.get("/profile");
}

export function login(username, password) {
  return http.post("/login", { username, password });
}

export function register(data) {
  return http.post("/users", data);
}

export function toggleWatched(game) {
  return http.post(`/games/${game.id}/watched`, game)
}