import { GameItem, Alerts } from "../../../components/games";


function WatchList({ games }) {
  console.log("4", games)
  if(!games?.length) {
    return (<h1>No games added to the Watchlist</h1>);
  } else {
    return (
      <div className="d-flex flex-column gap-3 p-3">
        {games?.map((game) => (
          <div key={`${game.id}`} className="">
            <GameItem game={game} />
            {game.deals.length > 0 && <Alerts gameId={game.deals[0].gameInfo.gameID}/>}
          </div>
        ))}
      </div>
    )
  }
  
}

export default WatchList;