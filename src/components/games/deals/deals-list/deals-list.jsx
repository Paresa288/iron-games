import { DealItem } from "../..";

function DealsList({ deals }) {
  if (deals.length === 0) {
    return (<h3>Sorry. We could not find deals for this game</h3>);
  } else {
    return (
      <div className="d-flex flex-wrap gap-2">
        {deals.slice(0, 10).map((deal) => (
          <DealItem deal={deal} key={deal.id} />
        ))}
      </div>
    )
  }
}

export default DealsList;