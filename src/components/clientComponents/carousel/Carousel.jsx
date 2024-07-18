import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function Carousel()
{
  return (
    <Swiper
      slidesPerView={ 1 }
      spaceBetween={ 30 }
      loop={ true }
      pagination={ {
        clickable: true,
      } }
      navigation={ true }
      modules={ [ Pagination, Navigation ] }
      className="mySwiper"
    >
      <SwiperSlide><img width={ 200 } height={ 200 } src="https://cdnphoto.dantri.com.vn/COm1qksauO2sqAC-gVVI2DdH_1I=/thumb_w/1020/2023/01/24/khoa-hocdocx-1674520013659.png" alt="image" /></SwiperSlide>
      <SwiperSlide><img width={ 200 } height={ 200 } src="https://cdnphoto.dantri.com.vn/COm1qksauO2sqAC-gVVI2DdH_1I=/thumb_w/1020/2023/01/24/khoa-hocdocx-1674520013659.png" alt="image" /></SwiperSlide>
      <SwiperSlide><img width={ 200 } height={ 200 } src="https://cdnphoto.dantri.com.vn/COm1qksauO2sqAC-gVVI2DdH_1I=/thumb_w/1020/2023/01/24/khoa-hocdocx-1674520013659.png" alt="image" /></SwiperSlide>
      <SwiperSlide><img width={ 200 } height={ 200 } src="https://cdnphoto.dantri.com.vn/COm1qksauO2sqAC-gVVI2DdH_1I=/thumb_w/1020/2023/01/24/khoa-hocdocx-1674520013659.png" alt="image" /></SwiperSlide>
    </Swiper>
  );
}

export default Carousel;