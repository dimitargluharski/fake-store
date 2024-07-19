import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Keyboard, Pagination, Navigation } from 'swiper/modules';

export const SwiperAnimation = () => {
  return (
    <>
      <Swiper
        className="h-dvh bg-red-500"
        slidesPerView={1}
        spaceBetween={0}
        loop={true} // Enable looping
        loopAdditionalSlides={1} // Ensure the swiper loops back to the beginning smoothly
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
      >
        <SwiperSlide className="flex justify-center items-center">
          <img src="path_to_image1.jpg" alt="Slide 1" className="max-w-full h-auto mx-auto" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img src="path_to_image2.jpg" alt="Slide 2" className="max-w-full h-auto mx-auto" />
        </SwiperSlide>
        <SwiperSlide className="flex justify-center items-center">
          <img src="path_to_image3.jpg" alt="Slide 3" className="max-w-full h-auto mx-auto" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
