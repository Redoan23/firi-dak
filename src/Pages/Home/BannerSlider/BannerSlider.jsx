
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const BannerSlider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper mx-auto w-[65%] lg:w-[56%] h-[130px] md:h-[270px] lg:h-[400px]"
            >
                <SwiperSlide ><img className=' object-cover h-full w-full' src="https://i.ibb.co/QYsC6sh/53989.jpg" alt="" /></SwiperSlide>
                <SwiperSlide ><img className=' object-cover h-full w-full' src="https://i.ibb.co/GT2zZrC/57691.jpg" alt="" /></SwiperSlide>
                <SwiperSlide ><img className=' object-cover h-full w-full' src="https://i.ibb.co/wW8sybR/47570.jpg" alt="" /></SwiperSlide>
                <SwiperSlide ><img className=' object-cover h-full w-full' src="https://i.ibb.co/cQrF5f5/13235.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerSlider;