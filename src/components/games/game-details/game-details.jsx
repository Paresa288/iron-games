import { platformToIcon } from "../../../utils/game";

function GameDetails({ game }) {
  console.log(game.platforms.forEach(platform => {
    platform.name
  }))
  return (
    <div className="container">
      <div className="row justify-content-around">
        <div id="carouselExampleIndicators" className="carousel slide col-4">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner rounded">
            <div className="carousel-item active">
              <img src={game.movies[0].preview} className="d-block w-100" alt={game.movies[0].name}/>
            </div>
            {game.movies.map((movie) => {
              return (
                <div key={movie.name} className="carousel-item">
                  <video src={movie.data.max} className="d-block w-100" alt={movie.name}/>
                </div>
              )
            })}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container py-3 bg-secondary rounded col-7">
          <div className="row justify-content-between">
            <h3 className="col-8">{game.name}</h3>
            <div className="col-4">{`RATING: ${game.rating}`}</div>
          </div>
          <div className="row justify-content-between">
            <div className="col">{`VOTE COUNT: ${game.ratingsCount}`}</div>
            <div className="col">{`RELEASED: ${game.released}`}</div>
          </div>
          <div className="row">
            <div className="col">{}</div>
          </div>
          <div className="row">
            <div className=" py-3 bg-secondary rounded col-3">Available for:</div>
            {game.platforms.map(( { name }) => (
              <img key={name}  src={platformToIcon(name)} alt={name} height={15} className="col align-self-center"></img>
            ))}    
          </div>   
        </div>
      </div>
    </div>
  )
}

export default GameDetails;