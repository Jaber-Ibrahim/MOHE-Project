
import { MainTitle, Slider } from './../../Components/importComponents';
import { SwiperSlide } from 'swiper/react';
import "./MediaNews.css"
import newsImg from "./../../assets/news1.jfif"
import axios from "./../../Components/axios/customAxios"
import { useState , useEffect } from "react";


const MediaNews = () => {

  const [mediaNews, setmediaNews] = useState("");
  let MyCards;

    useEffect( () => {
      axios.get("5c44e4e3-3974-470e-bb75-02df0b6fff3b",mediaNews)
                .then((response) => {
                  setmediaNews(response.data.data);
                })
                .catch((error) => {
                  console.log(error);
                });
      }, []);

      if(mediaNews) {
        MyCards = mediaNews.map((card,index) => {
          return (
            <SwiperSlide key={`${index}${card.newsDate}`} className="JI_MediaNews_Card">
            <img src={newsImg} />
            <div className="JI_MediaNews_Card_Info">
              <h1 className="JI_MediaNews_Card_h1">
                {card.title}
                <span className="JI_MediaNews_Card_span"> .... اقرأ المزيد</span>
              </h1>
              <p className="JI_MediaNews_Card_p"><span className="JI_MediaNews_Card_address">{card.place}</span>-
              {card.newsDate}</p>
            </div>
          </SwiperSlide>
          )
        })
      }

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