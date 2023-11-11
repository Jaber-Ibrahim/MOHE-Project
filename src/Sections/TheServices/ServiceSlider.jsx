import React from 'react'
import { Splide, SplideSlide,SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Card from './../../Components/ServiceCard/Card';
import service1 from "../../assets/service1.png";
import classes from './style.module.css'
import './slider.css'
import axios from "./../../Components/axios/customAxios"
import { useState , useEffect } from "react";

const ServiceSlider = () => {
  const [services, setservices] = useState("");
  let Myservices;

    useEffect( () => {
      axios.get("7c79aa97-057c-4137-8885-1fe20de402e2",services)
                .then((response) => {
                  setservices(response.data.data);
                })
                .catch((error) => {
                  console.log(error);
                });
      }, []);

      if(services) {
        Myservices = services.map((card,index) => {
          return (
            <SplideSlide key={`${card.name} ${index}`}><Card img={service1} title={card.name} /></SplideSlide>
          )
        })
      }

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
            {Myservices}
            </SplideTrack>
          <div className='splide__pagination'></div>
          </Splide>
    </div>
  )
}

export default ServiceSlider