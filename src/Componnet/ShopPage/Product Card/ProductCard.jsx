import { BiSolidHeartCircle } from "react-icons/bi";
import { FaCartArrowDown } from "react-icons/fa6";
import { TbListDetails } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { addItem } from "../../../redux/cartSlice";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
    //
    const { name, img, price } = item;
    // user cheek
    const { user } = useContext(AuthContext);
    // 
    const navigate=useNavigate();
    //add item
    const dispatch = useDispatch();
    const handleAdd = item => {
        if (user) {
            dispatch(addItem(item))
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Add to Product",
                showConfirmButton: false,
                timer: 1500
            });
        }
        else{
            Swal.fire({
                title: "Product add To Before Login?",      
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login')
                }
              });
        }
    }

    return (
        <div>
            <div className="card relative card-compact bg-base-100 w-full shadow">
                <figure>
                    <img
                        src={img}
                        alt="Shoes" className='h-64 w-full' />

                </figure>
                {/* new */}
                <div className='absolute right-5 rounded top-4'>
                    <h3 className='bg-black text-white rounded px-3 py-2 inline-block'>New</h3>
                </div>
                {/* title card */}
                <div className="card-body bg-orange-300 rounded">
                    <div className="flex  justify-between items-center">
                        <h2 className="card-title lg:text-2xl text-xl font-fontAb font-semibold">{name}</h2>
                        <h5 className="bg-green-600 items-end rounded md:text-2xl text-xl px-2 text-white py-2 font-medium">${price}</h5>
                    </div>
                    <div className="card-actions pt-4 justify-between items-center">
                        <button onClick={() => handleAdd(item)} className="btn hover:bg-black hover:text-white">
                            <FaCartArrowDown className="lg:text-3xl text-xl" />
                        </button>
                        <button className="btn hover:bg-black hover:text-white">
                            <BiSolidHeartCircle className="lg:text-3xl text-xl" />
                        </button>
                        <button className="btn hover:bg-black hover:text-white">
                            <TbListDetails className="lg:text-3xl text-xl" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;