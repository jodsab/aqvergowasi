import React from 'react'
import './nuestroequipo.scss'


import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

function NuestroEquipo() {


    return (
        <div id='us' className='nuestroequipo_container'>
            <h3>NUESTRO EQUIPO</h3>
            <div className='cartas_container'>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='carta'>
                    <img src={require('../assets/chicas/Melissa.png').default} />
                    <div className='carta_msj'>
                        <p className='nombre'>Melissa Bohórquez</p>
                        <h4>Especialista en SST & Ergonomía</h4>
                        <button>Ver más</button>
                    </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='carta'>
                    <img src={require('../assets/chicas/Cindy.png').default} />
                    <div className='carta_msj'>
                      <p className='nombre'>Cindy Cárdenas</p>
                        <h4>Especialista en Gestión de Riesgos</h4>
                        <button>Ver más</button>
                    </div>
          </div>
        </SwiperSlide>
      </Swiper>
            </div>
        </div>
    )
}

export default NuestroEquipo
