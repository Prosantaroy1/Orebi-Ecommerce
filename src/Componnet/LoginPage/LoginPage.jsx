import { useContext } from "react";
import { TiTick } from "react-icons/ti";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const LoginPage = () => {

    const {signInUser}=useContext(AuthContext);
    // nagigate
    const navigate= useNavigate();
    // 
    const handleLogin=(e)=>{
        e.preventDefault();
        const from= e.target;
        const email=from.email.value;
        const password=from.password.value;
        // 
        signInUser(email, password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            navigate('/')
            Swal.fire("Successfully Login");
        })
        .then(error=>{
            console.log(error);
        })

    }

    return (
        <div className="grid grid-cols-3 gap-2">
            {/* Login left */}
            <div className="bg-[#3f3e3e] md:block hidden p-6 h-screen text-white">
                <h3 className="text-5xl font-fontAb font-bold">Tp Shop</h3>
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
                <form onSubmit={handleLogin}>
                    <h4 className="font-fontAb font-semibold text-5xl">Login</h4>
                    <div className="flex pt-4 flex-col gap-4">
                        <label className="text-xl font-fontAb font-semibold">Email</label>
                        <input type="email" name="email" className="border border-b-slate-400 w-full md:w-[400px] p-4 font-fontAb font-medium" placeholder="Enter your Email?" />
                    </div>
                    {/* email */}
                    <div className="flex pt-5 flex-col gap-4">
                        <label className="text-xl font-fontAb font-semibold">Password</label>
                        <input type="password" name="password" className="border border-b-slate-400 w-full md:w-[400px] p-4 font-fontAb font-medium" placeholder="Enter your password?" />
                    </div>
                    {/* btn */}
                    <div className="pt-6">
                        <input type="submit" value="Login" className="btn bg-black hover:text-black text-xl text-white btn-wide" />
                    </div>
                    {/* register */}
                    <p className="font-fontAb font-medium text-xl pt-5">
                        Create New Account
                        <NavLink className='text-2xl text-green-500 pl-4 underline' to='/register'>Register</NavLink>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;