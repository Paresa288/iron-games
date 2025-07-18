import { Link } from "react-router-dom";
import { platformToIcon } from "../../../utils/game"
import { useAuth } from "../../../contexts/auth-context";
import * as AuthApi from "../../../services/auth-api";
import * as RAWGApi from "../../../services/rawg-api";

function GameItem({ game }) {
  const { user, reloadUser } = useAuth();
  
  const handleWatchedToggle = async () => {
    const fullGame = await RAWGApi.getGame(game.slug);
    await AuthApi.toggleWatched(fullGame);
    reloadUser();
  }
  
  const isWatched = user?.watchedGames
    ?.some((watchedGame) => watchedGame.id === game.id );
  
  const parsePlatforms = game.platforms.map(platform => platform.name.slice(0, 4));

  const uniquePlatforms = parsePlatforms.filter((platform, i) => parsePlatforms.indexOf(platform) === i);

  console.log("1", game.platforms, uniquePlatforms);
  return (
    <div className="card game-card" style={{width: "18rem"}}>
        <img src={game.bgImage} alt={game.name} className="card-img"/>
        <div className="card-img-overlay d-flex justify-content-end">
          {user && ( <i className={`fa fa-certificate ${isWatched ? "active" : ""}`} role="button" style={{ zIndex: 9999 }} onClick={() => handleWatchedToggle()}></i> )}
        </div>
        <div className="card-body">
          {game.platforms.length != 0 && (
            <div className="d-flex gap-2 mb-1">
              {uniquePlatforms.map((platform) => (
                <img key={platform}  src={platformToIcon(platform)} alt={platform} height={15}></img>
              ))}
            </div>
          )}
          <h6 className="card-title">
            <Link to={`/game/${game.slug}`} className="stretched-link text-decoration-none text-white">{game.name}</Link> 
          </h6>
        </div>
    </div>
  );
}

export default GameItem;