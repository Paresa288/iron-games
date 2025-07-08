import axios from "axios";
import { appStoreIcon, epicGamesIcon, gogIcon, googlePlayIcon, itchIoIcon, steamIcon } from "../assets/images/stores";
import { nintendoIcon, playstationIcon, xboxIcon } from "../assets/images/platforms";
import { getSteamId } from "../utils/game";
import * as CHEAPSHARKApi from "../services/cheapshark-api";

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
  const [game, movies, stores, screenshots] = await Promise.all([
    http.get(`/games/${slug}`),
    http.get(`/games/${slug}/movies`),
    http.get(`/games/${slug}/stores`),
    http.get(`/games/${slug}/screenshots`),
  ])
  const gameDetails = {
    ...parseGame(game),
    description: game.description,
    movies: movies.results,
    stores: stores.results.map(parseStore),
    screenshots: screenshots.results 
  } 
  gameDetails.steamId = getSteamId(gameDetails)

  const deals = await CHEAPSHARKApi.getDeals(gameDetails.steamId)
  gameDetails.deals = deals
  console.log("pablo", gameDetails)
  return gameDetails;
}

const parseStore = (store) => {
  return {
    ...stores[store.store_id.toString()],
    url: store.url
  }
}
  


const parseGame = (game) => {
  console.log("pablo 2", game)
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
    playTime: game.playtime,
    genres: game.genres.map((genre) => {
      return {
        id: genre.id,
        name: genre.name,
        gamesCount: genre.games_count,
        x: genre.games_count - Math.floor(Math.random() * genre.games_count),
        y: genre.games_count - Math.floor(Math.random() * genre.games_count),
      }
    }),
  }
}

export async function listGenres() {
  const { results } = await http.get("/genres");
  return console.log("pablo 3", results)
}

export async function listGames() {
  const { results } = await http.get("/games");
  return results.map((game) => parseGame(game))
}
