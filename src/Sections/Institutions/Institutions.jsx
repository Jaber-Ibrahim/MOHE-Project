import { Slider , MainTitle , Button} from "../../Components/importComponents"
import { SwiperSlide } from 'swiper/react';
import "./Institutions.css"
// import institutionsData from './../../data/institutuinsData';
import axios from "./../../Components/axios/customAxios"
import { useState , useEffect } from "react";



const Institutions = () => {
    const [institutions, setnstitutions] = useState("");
    let myInstitutionsCards;
    let childs;
  
      useEffect( () => {
        axios.get("37d0f3ff-4948-4967-b858-b1896c8cb77c",institutions)
                  .then((response) => {
                    setnstitutions(response.data.data);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
        }, []);
  
        if(institutions) {
            myInstitutionsCards = institutions.map((card,index) => {
                return (
                <SwiperSlide key={`${index}${card.title}`} className="JI_Institution_Card">
                    <h1 className="JI_Institution_Card_H1">{card.title}</h1>
                    <h3 className="JI_Institution_Card_H3">{card.first}</h3>
                    <h3 className="JI_Institution_Card_H3">{card.second}</h3>
                    <h3 className="JI_Institution_Card_H3">{card.third}</h3>
                    <Button desc="اقرأ المزيد"/>
                </SwiperSlide>
            )
          })
        }







    // let myInstitutionsCards = institutionsData.map((card , index) =>{
    //     return (
    //         <SwiperSlide key={`${card.id}${card.title}`}
    //         className="JI_Institution_Card">
    //         <h1 className="JI_Institution_Card_H1">{card.title}</h1>
    //         <h3 className="JI_Institution_Card_H3">{card.first}</h3>
    //         <h3 className="JI_Institution_Card_H3">{card.second}</h3>
    //         <h3 className="JI_Institution_Card_H3">{card.third}</h3>
    //         <Button desc="اقرأ المزيد"/>
    //     </SwiperSlide>
    //     )
    // })
  return (
    <>
        <MainTitle title="مؤسسات التعليم العالي"/>
        <Slider>
            {myInstitutionsCards}
        </Slider>
    </>
  )
}

export default Institutions