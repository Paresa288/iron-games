import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PageLayout } from "../components/layouts";
import { GameDetails } from "../components/games";
import * as RAWGApi  from "../services/rawg-api.js";


function GameDetailsPage() {
  const { gameSlug } = useParams(); 
  const [game, setGame] = useState();

  useEffect(() => {
    RAWGApi.getGame(gameSlug)
      .then((game) => setGame(game))
      .catch((error) => console.error(error))
  }, [gameSlug])
  
  if(!game) {
    return <>Loading...</>
  } else {
    console.log(game)
    return (
      <PageLayout>
        <GameDetails game={game}/>
      </PageLayout>
    );

  }
}

export default GameDetailsPage;