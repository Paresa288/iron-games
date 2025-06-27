import { Link } from "react-router-dom";
import { platformToIcon } from "../../../utils/game"

function GameItem({ game }) {
  return (
      <Link to={`/game-details/${game.slug}`} id="game-card" className="card" style={{width: "18rem"}}>
        <img src={game.bgImage} alt={game.name}></img>
        <div className="card-body">
          {game.platforms.length != 0 && (
            <div className="d-flex gap-2 mb-1">
              {game.platforms.map(({ platform: { name } }) => (
                <img key={name}  src={platformToIcon(name)} alt={name} height={15}></img>
              ))}
            </div>
          )}
          <p className="card-title">{game.name}</p>
        </div>
      </Link>
  );
}

export default GameItem;