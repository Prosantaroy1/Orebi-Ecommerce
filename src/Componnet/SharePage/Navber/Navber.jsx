import { FaBars } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navber = () => {
    return (
        <>
            {/* nav top */}
            <div className="bg-[#ffffff]  shadow">
                <div className="container md:px-0 px-3 flex justify-between items-center mx-auto py-6">
                    {/* nav logo */}
                    <h3 className="md:text-3xl text-xl font-fontAb font-semibold">TP SHOP</h3>
                    {/* navlink */}
                    <div>
                        <ul className="md:flex  hidden items-center gap-7 text-xl font-fontAb font-medium">
                            <li className="px-2 border-r-4 border-black"><NavLink to='/'>Home</NavLink></li>
                            <li className="px-2 border-r-4 border-black"><NavLink to='/shop'>Store</NavLink></li>
                            <li className="px-2 border-r-4 border-black"><NavLink to='/about'>About</NavLink></li>
                            <li className="px-2 border-r-4 border-black"><NavLink to='/contact'>Contacts</NavLink></li>
                            <li><NavLink to='/journals'>Journal</NavLink></li>

                        </ul>
                    </div>
                    {/* responsive */}
                    <div className="block md:hidden">
                        <FaBars className="text-2xl"/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navber;