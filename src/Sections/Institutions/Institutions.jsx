import { Slider , MainTitle , Button} from "../../Components/importComponents"
import { SwiperSlide } from 'swiper/react';
import "./Institutions.css"
import institutionsData from './../../data/institutuinsData';


const Institutions = () => {
    let myInstitutionsCards = institutionsData.map((card , index) =>{
        return (
            <SwiperSlide key={`${card.id}${card.title}`}
            className="JI_Institution_Card">
            <h1 className="JI_Institution_Card_H1">{card.title}</h1>
            <h3 className="JI_Institution_Card_H3">{card.first}</h3>
            <h3 className="JI_Institution_Card_H3">{card.second}</h3>
            <h3 className="JI_Institution_Card_H3">{card.third}</h3>
            <Button desc="اقرأ المزيد"/>
        </SwiperSlide>
        )
    })
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