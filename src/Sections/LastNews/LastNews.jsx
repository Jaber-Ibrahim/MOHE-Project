import {MainTitle , LastNewsCard } from "./../../Components/importComponents"
import LastNewsData from './../../data/lastNewData';

const LastNews = () => {
  let LastNewsCards = LastNewsData.map((card) => {
    return (
      <LastNewsCard key = {card.id}
      title ={card.title}/>
    )
  })
  return (
    <>
        <MainTitle title="آخر الأخبار"/>
          {LastNewsCards}
    </>
  )
}

export default LastNews