import axios from "axios"

const http = axios.create({
  baseURL: import.meta.env.VITE_CHEAPSHARK_BASE_URL
})

http.interceptors.response.use(
  (response) => response.data
)

async function getDealDetails(dealId) {
  try {
    const deal = await http.get(`/deals?id=${dealId}`);
    deal.gameInfo.storeIcon = `https://www.cheapshark.com/img/stores/icons/${parseInt(deal.gameInfo.storeID) - 1}.png`;
    return deal;
  } catch (error) {
    /* console.error(error) */  
    return null
  }
}

async function getGameDeals(gameId) { 
  const { deals } = await http.get(`/games`, { params: { id: gameId } });
  /* console.log(deals) */
  if (deals) {
    const gameDeals = await Promise.all(deals.map( async ({ dealID }) => {
      const deal = await getDealDetails(dealID);
      if (deal) deal.id = dealID;
      return deal;
    }));
    return gameDeals.filter((deal) => deal != null);
  } else return [];
}

export async function getDeals(steamId) {
  const games = await http.get(`/games`, { params: { steamAppID: steamId } });
  if (games.length > 0) return getGameDeals(games[0].gameID);
  else return [];
}

export async function setAlert(email, gameId, price) {
  const alert = await http.get("/alerts", { params: { action: "set", email: email, gameID: gameId, price: price }})
  return alert;
}

export async function deleteAlert(email, gameId, price) {
  const alert = await http.get("/alerts", { params: { action: "delete", email: email, gameID: gameId, price: price }})
  return alert;
}

