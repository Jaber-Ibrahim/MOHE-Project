import {MainTitle , LastNewsCard } from "./../../Components/importComponents"
import axios from "./../../Components/axios/customAxios"
import { useState , useEffect } from "react";

const LastNews = () => {
  const [news, setNews] = useState("");
  let LastNewsCards;

    useEffect( () => {
      axios.get("a5a5d7fc-3b77-4f72-813a-68507ef5693c",news)
                .then((response) => {
                  setNews(response.data.data);
                })
                .catch((error) => {
                  console.log(error);
                });
      }, []);

      if(news) {
        LastNewsCards = news.map((card,index) => {
          return (
            <LastNewsCard key={`${index} ${card.title}`}
            title={card.title}/>
          )
        })
      }


  return (
    <>
        <MainTitle title="آخر الأخبار"/>
          {LastNewsCards}
    </>
  )
}

export default LastNews