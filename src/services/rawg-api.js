import axios from "axios";
import { appStoreIcon, epicGamesIcon, gogIcon, googlePlayIcon, itchIoIcon, steamIcon } from "../assets/images/stores";
import { nintendoIcon, playstationIcon, xboxIcon } from "../assets/images/platforms";

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

const stores = {
  "1": {
    name: "Steam",
    storeId: "1",
    icon: steamIcon,
  },
  "2": {
    name: "Xbox Store",
    storeId: "2",
    icon: xboxIcon,
  },
  "3": {
    name: "PlayStation Store",
    storeId: "3",
    icon: playstationIcon,
  },
  "4": {
    name: "App Store",
    storeId: "4",
    icon: appStoreIcon,
  },
  "5": {
    name: "GOG Store",
    storeId: "5",
    icon: gogIcon,

  },
  "6": {
    name: "Nintendo Store",
    storeId: "6",
    icon: nintendoIcon,

  },
  "7": {
    name: "Xbox 360 Store",
    storeId: "7",
    icon: steamIcon,

  },
  "8": {
    name: "GooglePlay Store",
    storeId: "8",
    icon: googlePlayIcon,
  },
  "9": {
    name: "Itch.io",
    storeId: "9",
    icon: itchIoIcon,
  },
  "11": {
    name: "Epic Games Store",
    storeId: "11",
    icon: epicGamesIcon,
  },
}

export async function getGame(slug) {
  const [game, movies, stores] = await Promise.all([
    http.get(`/games/${slug}`),
    http.get(`/games/${slug}/movies`),
    http.get(`/games/${slug}/stores`),
  ])
  return {
    ...parseGame(game),
    description: game.description,
    movies: movies.results,
    stores: stores.results.map(parseStore), 
  } 
}

const parseStore = (store) => {
  return {
    ...stores[store.store_id.toString()],
    url: store.url
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
    platforms: game.platforms.map(({ platform }) => {
      return {
        name: platform.name,
        id: platform.id,
      }  
    }),
    stores: game.stores,
    playTime: game.playtime
  }
}

export async function listGames() {
  const { results } = await http.get("/games")
  return results.map((game) => parseGame(game))
}
