import { TiTick } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const RegisterPage = () => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-2">
                {/* Login left */}
                <div className="bg-[#3f3e3e] md:block hidden p-6 h-screen text-white">
                    <h3 className="text-4xl font-fontAb font-bold">Tp Shop</h3>
                    <h2 className="font-fontAb pt-3 text-2xl pb-2 font-semibold">
                        Stay sign in for more
                    </h2>
                    <h3 className="font-fontAb font-medium text-2xl">When you sign in, you are with us!</h3>
                    {/* step */}
                    <div className="pt-8">
                        <div>
                            <div className="flex items-center gap-2">
                                <TiTick className="text-2xl text-yellow-500" />
                                <h3 className="font-fontAb font-medium text-xl">Get started fast with OREBI</h3>
                            </div>
                            <p className="font-fontAb text-xl font-normal pt-2 pl-10">
                                Lorem ipsum, dolor sit amet<br /> consectetur adipisicing elit.
                                Ab omnis nisi<br /> dolor recusandae consectetur!
                            </p>
                        </div>
                        {/* two */}
                        <div className="pt-6">
                            <div className="flex items-center gap-2">
                                <TiTick className="text-2xl text-yellow-500" />
                                <h3 className="font-fontAb font-medium text-xl">Access all OREBI services</h3>
                            </div>
                            <p className="font-fontAb text-xl font-normal pt-2 pl-10">
                                Lorem ipsum, dolor sit amet<br /> consectetur adipisicing elit.
                                Ab omnis nisi<br /> dolor recusandae consectetur!
                            </p>
                        </div>
                        {/* three */}
                        <div className="pt-6">
                            <div className="flex items-center gap-2">
                                <TiTick className="text-2xl text-yellow-500" />
                                <h3 className="font-fontAb font-medium text-xl">Trusted by online Shoppers</h3>
                            </div>
                            <p className="font-fontAb text-xl font-normal pt-2 pl-10">
                                Lorem ipsum, dolor sit amet<br /> consectetur adipisicing elit.
                                Ab omnis nisi<br /> dolor recusandae consectetur!
                            </p>
                        </div>
                    </div>
                    {/* last */}
                    <ul className="flex items-center gap-5 absolute bottom-5 font-fontAb text-xl">
                        <li>TP Shop</li>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>Privacy</li>
                        <li>Teams</li>
                    </ul>
                </div>
                {/* Login right */}
                <div className=" flex justify-center h-screen items-center col-span-3 md:col-span-2">
                    <form>
                        <h4 className="font-fontAb font-semibold text-5xl">Register</h4>
                        {/* name */}
                        <div className="flex pt-4 flex-col gap-4">
                            <label className="text-xl font-fontAb font-semibold">Full Name</label>
                            <input type="text" name="name" className="border border-b-slate-400 w-full md:w-[400px] p-4 font-fontAb font-medium" required placeholder="Enter your Name?" />
                        </div>
                        {/* email */}
                        <div className="flex pt-4 flex-col gap-4">
                            <label className="text-xl font-fontAb font-semibold">Email</label>
                            <input type="email" name="email" className="border border-b-slate-400 w-full md:w-[400px] p-4 font-fontAb font-medium" required placeholder="Enter your Email?" />
                        </div>
                        {/* password */}
                        <div className="flex pt-5 flex-col gap-4">
                            <label className="text-xl font-fontAb font-semibold">Password</label>
                            <input type="password" name="email" className="border border-b-slate-400 w-full md:w-[400px] p-4 font-fontAb font-medium" required placeholder="Enter your password?" />
                        </div>
                        {/* btn */}
                        <div className="pt-6">
                            <input type="submit" value="Register" className="btn bg-black hover:text-black text-xl text-white btn-wide" />
                        </div>
                        {/* register */}
                        <p className="font-fontAb font-medium text-xl pt-5">
                            Already Account
                            <NavLink className='text-2xl text-green-500 pl-4 underline' to='/login'>Login</NavLink>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;