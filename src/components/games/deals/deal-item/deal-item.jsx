function GameDealItem({ deal }) {

  /* return ( 
    <div className="card bg-text-black card">
      <img src={appleIcon} className="card-image" height={17} alt="apple" />
      <div className="p-2 card-img-overlay">
        <h5 className="card-title m-0">
          <a 
            href={`https://www.cheapshark.com/redirect?dealID=${deal.id}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="card-link stretched-link text-decoration-none"
          >
            {deal.gameInfo.salePrice}$
          </a>
        </h5>
      </div>
    </div>
  ); */
  return (
    <div className="d-flex flex-column align-items-center gap-1 position-relative text-bg-dark-secondary rounded p-2" >
      <img src={deal.gameInfo.storeIcon} height={25} alt={deal.gameInfo.storeID} />
      <a 
        href={`https://www.cheapshark.com/redirect?dealID=${deal.id}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="stretched-link text-decoration-none text-white"
      >
        {deal.gameInfo.salePrice}$
      </a>
    </div>
  )
}

export default GameDealItem;