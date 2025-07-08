import { platformToIcon } from "../../../utils/game";
import DOMPurify from "dompurify";
import DealsList from "../deals/deals-list/deals-list";
import ScatterChartComponent from "../scatter-chart/scatter-chart";

function GameDetails({ game }) {
  return (
    <>
      <div className="row g-3">
        <div id="game-screenshots" className="carousel slide col-5">
          <div className="carousel-indicators">
            {game.screenshots.map((screenshot, i) => {
              return (
                <button key={screenshot.id} type="button" data-bs-target="#game-screenshots" data-bs-slide-to={i} className={i === 0 ? "active" : ""} aria-current="true" aria-label={`Slide ${i + 1}`}></button>
              )
            })}
          </div>
          <div className="carousel-inner rounded">
            {game.screenshots.map((screenshot, i) => {
              return (
                <div key={screenshot.id} className={`${i === 0 ? "active" : ""} carousel-item`}>
                  <img src={screenshot.image} className="d-block w-100" alt={screenshot.image}/>
                </div>
              )
            })}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#game-screenshots" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#game-screenshots" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="col-7">
          <div className="bg-secondary p-3 h-100 rounded d-flex flex-column gap-3">
            <div className="rounded inset-box-shadow p-3">
              <div className="row">
                <div className="col-8">
                  <h2>{game.name}</h2>
                </div>
                <div className="col-4 text-end">
                  <p className="fw-lighter">RATING: <span className="fw-normal">{game.rating}/5</span></p>
                </div>
              </div>

              <div className="row">
                <div className="col fw-light">{`RELEASED: ${game.released}`}</div>
                <div className="col text-end fw-lighter">VOTES: <span className="fw-normal">{game.ratingsCount}</span></div>
              </div>

              <div className="row">
                <div className="col-3">Available for:</div>
                <div className="col align-self-center">
                  {game.platforms.map(( { name }) => (
                    <img key={name}  src={platformToIcon(name)} alt={name} height={15}></img>
                  ))}    
                </div>
              </div>   
            </div>

            <div className="rounded inset-box-shadow p-3 h-100">
              <div className="row">
                <div className="col-12">Find Deals (Original Price: {game.deals[0]?.gameInfo.retailPrice})</div>
                <div className="col">
                  <DealsList deals={game.deals}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-3 mt-4">
        <div className="col-8">
          <div className="p-3 bg-secondary rounded">
            <div className="p-3 rounded inset-box-shadow">
              <h3>Description</h3>
              <div dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(game.description)}}></div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="p-3 bg-secondary rounded h-100">
            <div className="p-3 rounded inset-box-shadow">
              <h3>Genres</h3>
              <ScatterChartComponent data={game.genres}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GameDetails;