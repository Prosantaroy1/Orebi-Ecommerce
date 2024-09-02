import { NavLink } from "react-router-dom";
import aboutImg from '../../assets/img/aboutImg/Image_with_button_1.png';
import aboutImg2 from '../../assets/img/aboutImg/Image_with_button_2.png';

const Aboutpage = () => {
    return (
        <div className="container md:px-1 px-4 mb-6 mx-auto py-12">
            <h3 className="font-fontAb font-semibold text-3xl">About</h3>
            {/* link */}
            <div className="breadcrumbs pt-4 text-sm">
                <ul>
                    <li className="text-xl"><NavLink to='/'>Home</NavLink></li>
                    <li className="text-xl">About</li>
                </ul>
            </div>
            {/* about img */}
            <div className="grid gap-12 pt-7 grid-cols-1 md:grid-cols-2">
                <div>
                    <img src={aboutImg} alt="" />
                </div>
                <div>
                    <img src={aboutImg2} alt="" />
                </div>
            </div>
            <h4 className="font-fontAb text-2xl font-medium pt-12">
                Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.
            </h4>
            {/* more about  */}
            <div className="grid pt-16 md:grid-cols-3 gap-7  grid-cols-1">
                {/* first */}
                <div>
                    <h3 className="font-fontAb font-semibold text-2xl">Our Vision</h3>
                    <p className="font-fontAb font-medium pt-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                {/* second */}
                <div>
                    <h3 className="font-fontAb font-semibold text-2xl">Our Story</h3>
                    <p className="font-fontAb font-medium pt-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                {/* thrid */}
                <div>
                    <h3 className="font-fontAb font-semibold text-2xl">Our Brands</h3>
                    <p className="font-fontAb font-medium pt-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Aboutpage;