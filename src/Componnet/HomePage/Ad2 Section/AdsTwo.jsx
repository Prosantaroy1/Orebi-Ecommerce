import { NavLink } from 'react-router-dom';
import ads from '../../../assets/img/all/Ads_2.png'

const AdsTwo = () => {
    return (
        <div className='container pb-12 mx-auto'>
            <NavLink to='/shop'>
                <img src={ads} alt="" />
            </NavLink>
        </div>
    )
};

export default AdsTwo;