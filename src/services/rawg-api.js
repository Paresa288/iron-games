import axios from "axios";


const http = axios.create({
  baseURL: import.meta.env.VITE_RAWG_BASE_URL,
});

export function listGames() {
  return http.get(`/games?key=${import.meta.env.VITE_RAWG_API_KEY}`)
}