import { useEffect, useState } from "react";
import * as RAWGApi from "../../../services/rawg-api"
import GameItem from "../game-item/game-item";

function GamesList() {
  const [games, setGames] = useState(null);

  useEffect(() => {
    RAWGApi.listGames()
      .then((games) => setGames(games))
      .catch((error) => console.error(error));
  }, []);

  if(!games) {
    return (<>Loading...</>);
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