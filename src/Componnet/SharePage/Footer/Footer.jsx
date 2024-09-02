import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";


const Footer = () => {
    return (
        <>
            <div className="bg-[#f5f5f5] md:px-0 px-3 py-28">
                <div className="container mx-auto">
                    <footer className="footer  text-base-content py-10">
                        <aside>
                            <h3 className="font-fontAb font-semibold text-2xl">
                                More about Orebi Shop
                            </h3>
                            <p className="font-fontAb pt-3 pb-4 font text-xl">
                                Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Enim sint ab ullam,<br /> numquam nesciunt in.
                            </p>
                            {/* social icon */}
                            <div className="flex items-center gap-6">
                                <FaFacebook className="text-3xl" />
                                <FaTwitter className="text-3xl" />
                                <BsInstagram className="text-3xl" />
                                <IoLogoYoutube className="text-3xl" />
                            </div>
                        </aside>
                        <nav>
                            <h6 className="font-fontAb font-semibold pb-4 text-2xl">Services</h6>
                            <a className="link font-fontAb font text-xl link-hover">Electronic</a>
                            <a className="link font-fontAb font text-xl link-hover">T-Shirts</a>
                            <a className="link font-fontAb font text-xl link-hover">Bag & Shu</a>
                            <a className="link font-fontAb font text-xl link-hover">Advertisement</a>
                        </nav>
                        <nav>
                            <h6 className="font-fontAb font-semibold pb-4 text-2xl">Company</h6>
                            <a className="link font-fontAb font text-xl link-hover">Home</a>
                            <a className="link font-fontAb font text-xl link-hover">About us</a>
                            <a className="link font-fontAb font text-xl link-hover">Store</a>
                            <a className="link font-fontAb font text-xl link-hover">Contacts</a>
                        </nav>
                        <nav>
                            <h6 className="font-fontAb font-semibold pb-4 text-2xl">Legal</h6>
                            <a className="link font-fontAb font text-xl link-hover">Terms of use</a>
                            <a className="link font-fontAb font text-xl link-hover">Privacy policy</a>
                            <a className="link font-fontAb font text-xl link-hover">Cookie policy</a>
                        </nav>
                    </footer>
                </div>
            </div>
            {/* footer last */}
            <div className="border-t-2 border-gray-300">
                <footer className="footer footer-center bg-[#f5f5f5] text-base-content p-4">
                    <aside>
                        <p className="font-fontAb md:text-xl">Copyright © {new Date().getFullYear()} - All right reserved by TP Shop</p>
                    </aside>
                </footer>
            </div>
        </>
    );
};

export default Footer;