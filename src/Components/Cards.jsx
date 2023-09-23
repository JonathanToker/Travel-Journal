import Card from "./Card"
import cardsInfo from "../cards-info.js"

export default function Cards() {
  const cards = cardsInfo.map(item => {
    return <Card key={item.id} {...item} />
  });

  return (
    <div className="cards-list">
      {cards}
    </div>
  )
}