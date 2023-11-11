/* eslint-disable react/prop-types */
import { Swiper } from 'swiper/react';
import { Autoplay,EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "./Slider.css"


const Slider = (props) => {
  return (
    <Swiper
        effect={'coverflow'}
        spaceBetween={50}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
        rotate: 0,
        stretch: 0,
        slideShadows: true,
        }}
        autoplay={{
            delay: 2500,
            pauseOnMouseEnter : true,
          }}
        pagination={{
            clickable: true,
          }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwipe"
    >
        {props.children}
    </Swiper>
  )
}

export default Slider