import classes from "./Hero.module.css"
import heroImg from "./../../assets/HeroSection.png"
import {Button} from "./../../Components/importComponents"
import axios from "./../../Components/axios/customAxios"
import { useState , useEffect } from "react";


const Hero = () => {
  const [breakNews, setbreakNews] = useState([]);
  let breakNewsCard;

    useEffect( () => {
      axios.get("07384a20-ccca-466d-b18f-4e770a774a5f",breakNews)
                .then((response) => {
                  setbreakNews(response.data.data);
                })
                .catch((error) => {
                  console.log(error);
                });
      }, []);

      if(breakNews) {
        breakNewsCard = breakNews.map((card,index) => {
          return (
            <div key={index} className={classes.Right}>
            <h1 className={classes.HeroTitle}>
                <span className={classes.HeroSpan}>{card.title}</span>
                <br/>
                {card.description}
            </h1>
            <Button 
            desc = "تقدم الآن"/>
        </div>
          )
        })
      }
  return (
    <div className={classes.Hero}>
        {breakNewsCard}
        <div className={classes.Left}>
            <img src={heroImg} alt="last breakNews img" />
        </div>

    </div>
  )
}

export default Hero