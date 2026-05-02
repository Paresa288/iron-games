import { useEffect, useState } from "react";
import * as RAWGApi from "../../../services/rawg-api"
import GameItem from "../game-item/game-item";
import { useLocation } from "react-router-dom";

function GamesList() {
  const [games, setGames] = useState(null);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchQuery = params.get("search") || "";

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const games = searchQuery ? await RAWGApi.searchGames(searchQuery) : await RAWGApi.listGames();
        setGames(games);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGames();
    RAWGApi.listGames()
      .then((games) => setGames(games))
      .catch((error) => console.error(error));
  }, [searchQuery]);

  if(!games) {
    return (
      <h1 className="text-warning position-absolute top-50 start-50">Loading...</h1>
    );

  } else {
    return (
      <div className="row g-2">
        {games.map((game) => (
          <div key={`${game.id}`} className="col">
            <GameItem game={game} />
          </div>
        ))}
      </div>
    )
  }
}

export default GamesList;