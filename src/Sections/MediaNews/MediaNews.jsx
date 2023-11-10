
import { MainTitle, Slider } from './../../Components/importComponents';
import { SwiperSlide } from 'swiper/react';
import "./MediaNews.css"
import mediaNewsData from "./../../data/MediaNewsData"
const MediaNews = () => {

  let MyCards = mediaNewsData.map((card,index) => {
    return (
      <SwiperSlide key={`${index}swiper_MediaNews`} className="JI_MediaNews_Card">
      <img src={card.img} />
      <div className="JI_MediaNews_Card_Info">
        <h1 className="JI_MediaNews_Card_h1">
          {card.title}
          <span className="JI_MediaNews_Card_span"> .... اقرأ المزيد</span>
        </h1>
        <p className="JI_MediaNews_Card_p"><span className="JI_MediaNews_Card_address">{card.address}</span>-
        {card.time}</p>
      </div>
    </SwiperSlide>
    )
  })
  return (
    <div>
        <MainTitle title = "الأخبار الإعلامية"/>        
        <Slider>
          {MyCards}
        </Slider>
    </div>
  )
}

export default MediaNews