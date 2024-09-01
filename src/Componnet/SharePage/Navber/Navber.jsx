import { NavLink } from "react-router-dom";

const Navber = () => {
    return (
        <>
            {/* nav top */}
            <div className="bg-[#fffefe]">
                <div className="container flex justify-between items-center mx-auto py-6">
                    {/* nav logo */}
                    <h3 className="text-3xl font-fontAb font-semibold">TP SHOP</h3>
                    {/* navlink */}
                    <div>
                        <ul className="flex items-center gap-7 text-xl font-fontAb font-medium">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/shop'>Shop</NavLink></li>
                            <li><NavLink to='/about'>About</NavLink></li>
                            <li><NavLink to='/contact'>Contacts</NavLink></li>
                            <li><NavLink to='/'>Journal</NavLink></li>

                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navber;