import { useEffect, useState } from "react";


import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';


const BanglesCards = () => {

    const [bangles, setBangles] = useState([])
    useEffect(() => {
        fetch('./primarydata.json')
            .then(res => res.json())
            .then(data => setBangles(data))
    }, [])

    return (
        <div className=" mt-12 mx-auto">
            <div>
                <h3 className=' text-center mx-auto text-black text-4xl font-semibold mb-6'> Bangles </h3>
            </div>
            <div className=" mx-auto text-center flex justify-center">
                <Swiper
                    freeMode={true}
                    // loop={true}
                    modules={[FreeMode, Pagination, Navigation]}
                    breakpoints={{
                        375: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        }
                    }}
                    className="mySwiper mx-auto flex justify-center text-center px-5"
                >
                    {
                        bangles.map((bangle, i) =>
                            <SwiperSlide key={i} className=" mx-auto">
                                <div className=" w-full mx-auto flex justify-center">
                                    <div className="card card-compact bg-transparent w-[90%]  md:w-96 text-gray-500 text-center rounded-none">
                                        <div className=" relative w-full h-44 md:h-80 overflow-hidden">
                                            <img className=" w-full h-full hover:scale-[1.05] duration-200 ease-in-out transition-all" src={bangle.img} alt="Bangle" />
                                            {bangle?.discount && <div className="absolute z-50 top-4 left-2 bg-orange-600 text-white w-12 h-12 rounded-full text-center flex justify-center items-center">
                                                -{bangle.discount}%
                                            </div>}
                                        </div>
                                        <div className="card-body text-center mx-auto h-40">
                                            <h2 className="card-title text-base">{bangle.name}</h2>
                                            {bangle?.discount ?
                                                <div className=" flex gap-2 justify-center items-center">
                                                    <span className=" text-gray-400 text-sm line-through">{bangle.price} Tk</span>
                                                    <span className=" text-orange-600 text-base">{bangle.price - (bangle.price * bangle.discount / 100)} TK</span>
                                                </div>
                                                :
                                                <div> <p className=" text-center text-orange-600 text-base">{bangle.price} TK</p></div>}
                                            <div className="card-actions justify-center">
                                                <button className="btn rounded-none text-white  bg-orange-600 border-none hover:bg-gray-200 hover:text-orange-600 min-h-[2rem] h-10 ">Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default BanglesCards;