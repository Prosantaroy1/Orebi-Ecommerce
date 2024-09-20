
import { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useDispatch } from "react-redux";
import { addItem } from "../../../redux/cartSlice";

const ProductDetails = () => {
    // All products
    const products = useLoaderData();

    // Product id from the URL params
    const { id } = useParams();

    // Find the specific product by id
    const datas = products?.find(item => item.id === Number(id));  // Use strict comparison and convert id to number
    // add cart
    // user cheek
    const { user } = useContext(AuthContext);
    // 
    const navigate = useNavigate();
    //add item
    const dispatch = useDispatch();
    const handleAdd = datas => {
        if (user) {
            dispatch(addItem(datas))
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Add to Product",
                showConfirmButton: false,
                timer: 1500
            });
        }
        else {
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
        <div className="py-12">
            <div className="container rounded-lg bg-black py-8 text-white mx-auto px-2 my-12">
                <div className="px-8 flex flex-wrap gap-y-5 items-center justify-between">
                    <div className="md:w-[49%] w-full">
                        <img src={datas.img} className="w-[600px]" />
                    </div>
                    {/*rpoduct details */}
                    <div className="md:w-[49%] w-full space-y-6">
                        <h3 className="text-4xl font-fontAb"><span className="font-semibold">Name:</span> {datas.name}</h3>
                        <p className="text-xl font-normal font-fontAb">
                            {datas.des}
                        </p>
                        <h3 className="text-3xl font-fontAb"><span className="font-semibold">Price:</span> ${datas.price}</h3>
                        <button onClick={() => handleAdd(datas)} className="bg-green-500 font-fontAb text-xl w-96 px-4 py-3 rounded-md">Add to cart</button>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="container space-y-3 mx-auto">
                <p className="text-xl font-fontAb">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aspernatur aperiam cupiditate ut,
                    provident, nesciunt voluptates recusandae officiis blanditiis
                    quidem doloribus dignissimos fugiat omnis impedit facilis, modi repudiandae vitae eius!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aspernatur aperiam cupiditate ut,
                    provident, nesciunt voluptates recusandae officiis blanditiis
                    quidem doloribus dignissimos fugiat omnis impedit facilis, modi repudiandae vitae eius!
                </p>
                <h3 className="text-3xl font-fontAb font-semibold border-b-2 p-4 pt-10">Feedback Customer---</h3>
                {/* fecdback */}
                <div className="pt-5 space-y-6">
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS chat bubble component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="chat-bubble py-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem saepe nisi error dolorem totam tempora temporibus harum corporis suscipit modi!
                        </div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS chat bubble component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="chat-bubble py-6">It was you who would bring balance to the Force</div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS chat bubble component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="chat-bubble py-6">
                            This product exceeded my expectations! The quality is top-notch, and it performs exactly as described.
                            The design is sleek and modern, adding a touch of elegance. Additionally, it was easy to set up and use.
                            Shipping was quick, and customer service was responsive. Highly recommend this product!
                        </div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS chat bubble component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="chat-bubble py-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias harum molestias repudiandae delectus nihil suscipit ex sunt?
                        </div>
                    </div>
                </div>
                {/* comment post */}
                <div className="py-7">
                    {/* message */}
                    <div className="flex pt-5 flex-col gap-4">
                        <label className="text-xl font-fontAb font-semibold">Message</label>
                        <textarea type="text" name="message" className="border border-b-slate-400 w-full md:w-1/2 p-4 py-6 font-fontAb font-medium" placeholder="Enter your Feedback?"></textarea>
                    </div>
                    {/* btn */}
                    <div className="pt-6">
                        <input type="submit" value="Post" className="btn bg-black hover:text-black text-xl text-white btn-wide" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;
