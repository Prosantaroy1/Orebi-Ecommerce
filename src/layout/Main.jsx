import { Outlet } from "react-router-dom";
import Navber from "../Componnet/SharePage/Navber/Navber";
import Footer from "../Componnet/SharePage/Footer/Footer";
import { IoCallOutline } from "react-icons/io5";

const Main = () => {
    return (
        <div className="relative">
            <Navber />
            <Outlet />
            <Footer />
            {/* sms */}
            <div className="bottom-5 fixed text-black rounded py-3 px-3 right-4">
                {/* <div className="flex items-center gap-3">
                    <IoCallOutline className="text-2xl"/>
                    <h3 className="text-2xl font-fontAb font-medium">Call Now</h3>
                </div> */}
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn z-30 bg-orange-500 text-white" onClick={() => document.getElementById('my_modal_2').showModal()}>
                    <div className="flex items-center gap-3">
                        <IoCallOutline className="text-2xl" />
                        <h3 className="text-xl font-fontAb font-medium">Call Now</h3>
                    </div>
                </button>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">How do you help me?</h3>
                        <textarea className="textarea mt-2 mb-2 w-full textarea-bordered" placeholder="Bio"></textarea>
                        <button className="btn btn-outline btn-accent">Submit</button>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
        </div>
    );
};

export default Main;