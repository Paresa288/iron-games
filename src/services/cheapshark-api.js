import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_CHEAPSHARK_BASE_URL
})

http.interceptors.response.use(
  (response) => response.data
)

async function getDealDetails(dealId) {
  try {
    return await http.get(`/deals?id=${dealId}`)
  } catch (error) {
    /* console.error(error) */  
    return null
  }
}

async function getGameDeals(gameId) { 
  const { deals } = await http.get(`/games`, { params: { id: gameId } });
  /* console.log(deals) */
  if (deals) {
    const gameDeals = await Promise.all(deals.map((deal) => getDealDetails(deal.dealID)));
    return gameDeals.filter((deal) => deal != null);
  } else return [];
}

export async function getDeals(steamId) {

  const games = await http.get(`/games`, { params: { steamAppID: steamId } });
  if (games.length > 0) return getGameDeals(games[0].gameID);
  else return [];
}