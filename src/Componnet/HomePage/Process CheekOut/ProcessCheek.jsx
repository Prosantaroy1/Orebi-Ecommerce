import { NavLink } from "react-router-dom";

const ProcessCheek = () => {
    // 
    const handle=e=>{
        console.log('djdcuifu')
    }

    return (
        <div className="container mx-auto py-16">
            <h4 className="text-3xl font-medium font-fontAb">CheekOut Payment</h4>
            <div className="breadcrumbs pt-4 text-sm">
                <ul>
                    <li className="text-xl"><NavLink to='/'>Home</NavLink></li>
                    <li className="text-xl">cheekout</li>
                </ul>
            </div>
            {/* bill */}
            <form onClick={handle}>
                <h4 className="font-fontAb mt-16 font-semibold text-5xl">Billing Details</h4>
                {/* name */}
                <div className="flex pt-4 flex-col gap-4">
                    <label className="text-xl font-fontAb font-semibold">Full Name</label>
                    <input type="text" name="name" className="border-b-2 border-b-slate-400 w-full md:w-[900px] p-4 font-fontAb font-medium" required placeholder="Enter your Name?" />
                </div>
                {/* email */}
                <div className="flex pt-4 flex-col gap-4">
                    <label className="text-xl font-fontAb font-semibold">Street Address *</label>
                    <input type="email" name="email" className="border-b-2 border-b-slate-400 w-full md:w-[900px] p-4 font-fontAb font-medium" required placeholder="Enter Street Address ?" />
                </div>
                {/* password */}
                <div className="flex pt-5 flex-col gap-4">
                    <label className="text-xl font-fontAb font-semibold">Country *</label>
                    <input type="text" name="email" className="border-b-2 border-b-slate-400 w-full md:w-[900px] p-4 font-fontAb font-medium" required placeholder="Enter your Country?" />
                </div>
                <div className="flex pt-4 flex-col gap-4">
                    <label className="text-xl font-fontAb font-semibold">Town/City *</label>
                    <input type="text" name="name" className="border-b-2 border-b-slate-400 w-full md:w-[900px] p-4 font-fontAb font-medium" required placeholder="Enter your Town/City *?" />
                </div>
                {/* email */}
                <div className="flex pt-4 flex-col gap-4">
                    <label className="text-xl font-fontAb font-semibold">Post Code *</label>
                    <input type="text" name="text" className="border-b-2 border-b-slate-400 w-full md:w-[900px] p-4 font-fontAb font-medium" required placeholder="Enter Post Code * ?" />
                </div>
                <div className="flex pt-4 flex-col gap-4">
                    <label className="text-xl font-fontAb font-semibold">Phone number *</label>
                    <input type="number" name="text" className="border-b-2 border-b-slate-400 w-full md:w-[900px] p-4 font-fontAb font-medium" required placeholder="Enter your phone number * ?" />
                </div>
                {/* password */}
                <div className="flex pt-5 flex-col gap-4">
                    <label className="text-xl font-fontAb font-semibold">Email *</label>
                    <input type="email" name="email" className="border-b-2 border-b-slate-400 w-full md:w-[900px] p-4 font-fontAb font-medium" required placeholder="Enter your email?" />
                </div>
                {/* add */}
                <div className="pt-10">
                    <h4 className="text-4xl font-fontAb font-medium">Additional Information</h4>
                    <div className="flex pt-5 flex-col gap-4">
                        <label className="text-xl font-fontAb font-semibold">Other Notes (optional)</label>
                        <input type="text" name="email" className="border-b-2 border-b-slate-400 w-full md:w-[900px] p-4 font-fontAb font-medium" required placeholder="Other Notes (optional)" />
                    </div>
                </div>

                {/* btn */}
                <div className="pt-8">
                    <input type="submit" value="Proccess to Back" className="btn bg-black hover:text-black text-xl text-white btn-wide" />
                </div>
            </form>
        </div>
    );
};

export default ProcessCheek;