import './swiper.css'
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, Autoplay, EffectCoverflow } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import 'swiper/css/scrollbar';


export default function Swiperr() {
  const [Categoriess, setCategories] = useState([]);
  const getData = async () => {
    const response = await fetch(
      `https://ecommerce-node4.vercel.app/categories/active?page=1&limit=9`
    );
    const data = await response.json();
    setCategories(data.categories);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
   <>

<Swiper
spaceBetween={30}
centeredSlides={true}
        effect={'coverflow'}
        grabCursor={true}
        navigation={true}
        pagination={{
            clickable: true,
          }}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
                  
        slidesPerView={4}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[Autoplay, Pagination, Navigation,EffectCoverflow]}

        // modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
    >
      {Categoriess.map((category) => (
        <div key={category.id}>
          <SwiperSlide>
            <img
              src={category.image.secure_url}
              alt="..."
            />
          </SwiperSlide>
        </div>
      ))}
    </Swiper>


    {/* <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 2000 }} // Change delay as needed
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      scrollbar={{ draggable: true }}

    >
      {Categoriess.map((category) => (
        <div key={category.id}>
          <SwiperSlide>
            <img
              src={category.image.secure_url}
              alt="..."
            />
          </SwiperSlide>
        </div>
      ))}
    </Swiper> */}


 

    </>
  );
}
