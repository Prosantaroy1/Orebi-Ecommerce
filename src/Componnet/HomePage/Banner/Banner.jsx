import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineMan2 } from "react-icons/md";
import bannerImg from '../../../assets/img/Banner/Group 10.jpg'
import bannerImg2 from '../../../assets/img/Banner/bannerImgTwo.webp'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="bg-slate-50 py-5 md:px-0 px-3 relative">
            {/* banner slider */}
            <div className="md:container pt-5  md:mx-auto">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={bannerImg2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={bannerImg} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={bannerImg2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={bannerImg} alt="" />
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default Banner;