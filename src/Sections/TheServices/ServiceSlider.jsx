import React from 'react'
import { Splide, SplideSlide,SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Card from './../../Components/ServiceCard/Card';
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";
import service5 from "../../assets/service5.png";
import service6 from "../../assets/service6.png";
import service7 from "../../assets/service7.png";
import service8 from "../../assets/service8.png";
import classes from './style.module.css'
import './slider.css'

const ServiceSlider = () => {
  return (
    <div className={classes.SliderContainer}>
        <Splide
        hasTrack={false}
          options={{
            type: 'slide',
            // fixedWidth:"143px",
            perPage:2,
            perMove:2,
            // arrows:false,
            direction:'rtl',
            gap:'1rem'
          }}>
            <SplideTrack >
            <SplideSlide><Card img={service1} title=" شارك برأيك" /></SplideSlide>
            <SplideSlide><Card img={service2} title="دليل الجامعات" /></SplideSlide>
            <SplideSlide><Card img={service3} title="النشرة البريدية" /></SplideSlide>
            <SplideSlide><Card img={service4} title="استفسارات"  /></SplideSlide>
            <SplideSlide><Card img={service5} title="احصائيات و مؤشرات "/></SplideSlide>
            <SplideSlide><Card img={service6} title="اللجنة الوطنية للتبادل الطلابي "/></SplideSlide>
            <SplideSlide><Card img={service7} title="دليل منظومة التعليم العالي "/></SplideSlide>
            <SplideSlide><Card img={service8} title="المكتبات الالكترونية " /></SplideSlide>
            </SplideTrack>
          <div className='splide__pagination'></div>
          </Splide>
    </div>
  )
}

export default ServiceSlider