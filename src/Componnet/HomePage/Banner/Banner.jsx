import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineMan2 } from "react-icons/md";
import bannerImg from '../../../assets/img/Banner/Group 10.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div className="bg-slate-50 py-5 relative">
            {/* banner header */}
            <div className="bg-slate-50 py-5">
                <div className="container mx-auto flex justify-between items-center">
                    {/* banner left header*/}
                    <div className="flex items-center gap-3">
                        {/* left fast */}
                        <div className="dropdown dropdown-bottom">
                            <div tabIndex={0} role="button" className="btn bg-white m-1">
                                <FaBarsStaggered className="text-xl" />
                            </div>
                            <ul tabIndex={0} className="dropdown-content absolute top-0 left-0 menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                        {/* left last */}
                        <h4>Shop by Category</h4>
                    </div>
                    {/* banner middle header*/}
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow w-[550px]" placeholder="Search Product" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-8 w-8 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                        </label>
                    </div>
                    {/* banner last header */}
                    <div>
                        <div className="flex items-center">
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost flex items-center justify-center btn-circle avatar">
                                    <div className="w-10 rounded-full flex items-center justify-center h-10">
                                        <MdOutlineMan2 className="text-4xl" />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content py-6 bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    <li>
                                        <a className="justify-between">
                                            Login
                                        </a>
                                    </li>
                                    <li><a>Register</a></li>

                                </ul>
                            </div>
                            {/* cart */}
                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                                    <div className="indicator">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-8 w-9"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                        <span className="badge badge-sm indicator-item">8</span>
                                    </div>
                                </div>
                                <div
                                    tabIndex={0}
                                    className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                                    <div className="card-body">
                                        <span className="text-lg font-bold">8 Items</span>
                                        <span className="text-info">Subtotal: $999</span>
                                        <div className="card-actions">
                                            <button className="btn btn-primary btn-block">View cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* banner slider */}
            <div className="container  mx-auto">
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
                        <img src={bannerImg} alt=""/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={bannerImg} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={bannerImg} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={bannerImg} alt="" />
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