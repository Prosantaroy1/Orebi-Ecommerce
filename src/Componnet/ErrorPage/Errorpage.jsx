import { NavLink } from 'react-router-dom';
import errorimg from '../../assets/img/error/404.png'

const Errorpage = () => {
    return (
        <div className='container mx-auto gap-7 flex h-screen items-center justify-center flex-col'>
            <img src={errorimg} alt="" />
            <h3 className='text-center font-fontAb font-normal'>The page you were looking for couldn't be found. The page could be removed or you<br /> misspelled the word while searching for it. Maybe try a search?</h3>
            <NavLink to='/'>
                <button className="btn btn-active btn-neutral">Go Back</button>
            </NavLink>
        </div>
    );
};

export default Errorpage;