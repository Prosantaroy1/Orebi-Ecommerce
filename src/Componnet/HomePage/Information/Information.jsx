import { FaCarSide } from "react-icons/fa6";
import { IoRefresh } from "react-icons/io5";

const Information = () => {
    return (
        <div className="border-b-2 md:px-0 px-3 border-gray-400 mb-3">
            <div className="container mx-auto md:px-0 px-3 py-8 flex flex-wrap gap-3 items-center justify-between">
                {/* first part */}
                <div className="flex items-center gap-3">
                    <h3 className="font-bold text-3xl">4</h3>
                    <p className="font-fontAb md:text-xl">Two years warranty</p>
                </div>
                {/* second part */}
                <div className="flex items-center gap-3">
                    <FaCarSide className="text-3xl"/>
                    <p className="font-fontAb md:text-xl">Free shipping</p>
                </div>
                {/* second part */}
                <div className="flex items-center gap-3">
                    <IoRefresh className="text-3xl"/>
                    <p className="font-fontAb md:text-xl">Return policy in 30 days</p>
                </div>
            </div>
        </div>
    );
};

export default Information;