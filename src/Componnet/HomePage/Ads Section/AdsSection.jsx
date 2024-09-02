import adsOne from '../../../assets/img/Ads/Ad_1.jpg'
import adsTwo from '../../../assets/img/Ads/saleImgThree----.webp'
import adsThree from '../../../assets/img/Ads/Ad_3.jpg'
import { NavLink } from 'react-router-dom';

const AdsSection = () => {
    return (
        <div className="container pt-8 pb-7  mx-auto md:px-0 px-3">
            {/* ads left part*/}
            <div className='grid md:grid-cols-2 grid-cols-1 gap-8'>
                <div>
                    <NavLink to='/shop'>
                        <img src={adsOne} alt="" />
                    </NavLink>
                </div>
                {/* ads right part */}
                <div className='flex flex-col justify-between gap-5'>
                    <NavLink to='/shop'>
                        <img src={adsThree} alt="" />
                    </NavLink>
                    <NavLink to='/shop'>
                        <img src={adsTwo} alt="" />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default AdsSection;