import {MainTitle , LastNewsCard } from "./../../Components/importComponents"
import LastNewsData from './../../data/lastNewData';
import axios from "./../../Components/axios/customAxios"
import { useState , useEffect } from "react";

const LastNews = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    axios.get("e22743e0-c909-497f-bd4d-9db1ca6246cd",news)
      .then((response)=> {
        setNews(response.data.data)
        console.log(response.data.data)
        if(news) {
          console.log(news)
          let LastNewsCards = LastNewsData.map((card) => {
            return (
              <LastNewsCard key = {card.id}
              title ={card.title}/>
            )
          })
        }
      })
      .catch((error) =>{
        console.log(error)
      })
  }, []);
  
  // let LastNewsCards = LastNewsData.map((card) => {
  //   return (
  //     <LastNewsCard key = {card.id}
  //     title ={card.title}/>
  //   )
  // })
  return (
    <>
        <MainTitle title="آخر الأخبار"/>
          {LastNewsCards}
    </>
  )
}

export default LastNews