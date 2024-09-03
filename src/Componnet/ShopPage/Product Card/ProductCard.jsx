import { BiSolidHeartCircle } from "react-icons/bi";
import { FaCartArrowDown } from "react-icons/fa6";
import { TbListDetails } from "react-icons/tb";

const ProductCard = ({ item }) => {
    //
    const { name, img, dec, price } = item;
    console.log(item)
    return (
        <div>
            <div className="card relative card-compact bg-base-100 w-96 shadow">
                <figure>
                    <img
                        src={img}
                        alt="Shoes" className='h-64 w-full' />

                </figure>
                {/* new */}
                <div className='absolute right-5 rounded top-4'>
                    <h3 className='bg-black text-white rounded px-3 py-2 inline-block'>New</h3>
                </div>
                <div className="card-body bg-orange-300 rounded">
                    <div className="flex  justify-between items-center">
                        <h2 className="card-title text-2xl font-fontAb font-semibold">{name}</h2>
                        <h5 className="bg-green-600 items-end rounded text-2xl px-2 text-white py-2 font-medium">${price}</h5>
                    </div>
                    <p className='font-fontAb font-medium'>
                        {dec}
                    </p>
                    <div className="card-actions pt-6 justify-between items-center">
                        <button className="btn hover:bg-black hover:text-white">
                            <FaCartArrowDown className="text-3xl" />
                        </button>
                        <button className="btn hover:bg-black hover:text-white">
                             <BiSolidHeartCircle className="text-3xl"/>
                        </button>
                        <button className="btn hover:bg-black hover:text-white">
                            <TbListDetails className="text-3xl"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;