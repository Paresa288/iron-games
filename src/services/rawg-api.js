import axios from "axios";

const http = axios.create({
    baseURL: import.meta.env.VITE_RAWG_BASE_URL
  }) 

http.interceptors.request.use((config) => {
  config.params = {...config.params, key: import.meta.env.VITE_RAWG_API_KEY}
  return config
})

http.interceptors.response.use(
  (response) => response.data
)

/* const http = setupCache(instance); */

export async function getGame(slug) {
  const [game, movies] = await Promise.all([
    http.get(`/games/${slug}`),
    http.get(`/games/${slug}/movies`),
  ])
  return {
    ...parseGame(game),
    description: game.description,
    movies: movies.results 
  } 
}

const parseGame = (game) => {
  return {
    id: game.id,
    name: game.name,
    slug: game.slug,
    released: game.released,
    bgImage: game.background_image,
    rating: game.rating,
    ratingsCount: game.ratings_count,
    platforms: game.platforms,
    stores: game.stores,
    playTime: game.playtime
  }
}

export async function listGames() {
  const { results } = await http.get("/games")
  return results.map((game) => parseGame(game))
}
