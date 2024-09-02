import { NavLink } from "react-router-dom";

const Journal = () => {
    return (
        <div className="container mx-auto pb-6 md:px-1 pt-16 px-3">
            <h3 className="font-fontAb font-semibold text-5xl">Journals</h3>
            {/* link */}
            <div className="breadcrumbs pt-4 text-sm">
                <ul>
                    <li className="text-xl"><NavLink to='/'>Home</NavLink></li>
                    <li className="text-xl">Journals</li>
                </ul>
            </div>
            {/* text */}
            <p className="font-fontAb pt-6 pb-8  font-medium text-xl">
                <span className="font-bold text-2xl pe-3">TP Shop</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo reiciendis
                <br /> delectus vitae, aliquid sit iure dolorum commodi eum numquam voluptate!
            </p>
            {/* news box */}
            <div className="grid lg:grid-cols-4 items-center justify-center md:grid-cols-2 grid-cols-1 gap-12">
                {/* one */}
                <div className="card bg-base-100 w-96  shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title font-fontAb font-medium text-2xl">Electronic</h2>
                        <p className="font-fontAb pt-3 pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem amet<br/> 
                            beatae tempora quos, dolores nisi porro eligendi!
                            </p>
                        <div className="card-actions justify-start">
                            <button className="btn font-fontAb btn-primary">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title font-fontAb font-medium text-2xl">Home Product</h2>
                        <p className="font-fontAb pt-3 pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem amet<br/> 
                            beatae tempora quos, dolores nisi porro eligendi!
                            </p>
                        <div className="card-actions justify-start">
                            <button className="btn font-fontAb btn-primary">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title font-fontAb font-medium text-2xl">Special Product</h2>
                        <p className="font-fontAb pt-3 pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem amet<br/> 
                            beatae tempora quos, dolores nisi porro eligendi!
                            </p>
                        <div className="card-actions justify-start">
                            <button className="btn font-fontAb btn-primary">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title font-fontAb font-medium text-2xl">ProductOne</h2>
                        <p className="font-fontAb pt-3 pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem amet<br/> 
                            beatae tempora quos, dolores nisi porro eligendi!
                            </p>
                        <div className="card-actions justify-start">
                            <button className="btn font-fontAb btn-primary">Details</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* second */}
            <div className="grid mt-10 lg:grid-cols-4 items-center justify-center md:grid-cols-2 grid-cols-1 gap-12">
                {/* one */}
                <div className="card bg-base-100 w-96  shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title font-fontAb font-medium text-2xl">Electronic</h2>
                        <p className="font-fontAb pt-3 pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem amet<br/> 
                            beatae tempora quos, dolores nisi porro eligendi!
                            </p>
                        <div className="card-actions justify-start">
                            <button className="btn font-fontAb btn-primary">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title font-fontAb font-medium text-2xl">Home Product</h2>
                        <p className="font-fontAb pt-3 pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem amet<br/> 
                            beatae tempora quos, dolores nisi porro eligendi!
                            </p>
                        <div className="card-actions justify-start">
                            <button className="btn font-fontAb btn-primary">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title font-fontAb font-medium text-2xl">Special Product</h2>
                        <p className="font-fontAb pt-3 pb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem amet<br/> 
                            beatae tempora quos, dolores nisi porro eligendi!
                            </p>
                        <div className="card-actions justify-start">
                            <button className="btn font-fontAb btn-primary">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Journal;