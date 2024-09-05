import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const CartPage = () => {
    // 
    const { cart } = useSelector((state) => state.allData);
    // total
    const total=cart.reduce((sum, totals)=> totals.price + sum , 0)
    console.log(total)

    return (
        <div className="container mx-auto py-16">
            <h4 className="text-3xl font-medium font-fontAb">Cart Page: {cart.length}</h4>
            <div className="breadcrumbs pt-4 text-sm">
                <ul>
                    <li className="text-xl"><NavLink to='/'>Home</NavLink></li>
                    <li className="text-xl">Cart</li>
                </ul>
            </div>
            {/* table */}
            <div className="mt-4">
                <div className="overflow-x-auto ">
                    <table className="table collapse font-fontAb text-xl">
                        {/* head */}
                        <thead>
                            <tr className="text-xl">
                                <th>
                                </th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                cart.map((item) => <tr key={item.id}>
                                    <th>
                                        <label>
                                            X
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-24 w-24">
                                                    <img
                                                        src={item.img}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <div className="font-bold">{item.name}</div>
                                    <td>
                                        ${item.price}
                                    </td>
                                </tr>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
            {/* totaal */}
            <div className="flex items-end justify-end flex-col gap-4 py-4 px-5">
                <h4 className="text-2xl font-fontAb font-semibold">Cart Totals</h4>
                <table class="border-collapse font-fontAb border border-slate-400 ...">
                    <thead>
                        <tr>
                            <th class="border px-16 py-3 border-slate-300 text-xl ...">SubTotal: </th>
                            <td class="border px-16 py-3 border-slate-300 text-xl ...">${total}</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="border px-16 py-3 border-slate-300 text-xl ...">Total: </th>
                            <td class="border px-16 border-slate-300 text-xl ...">${total}</td>
                        </tr>
                       
                    </tbody>
                </table>
                <button className="bg-black text-xl text-white hover:text-black border font-fontAb font-semibold px-4 py-2 hover:bg-white">Process CheekOut</button>
            </div>
        </div>
    );
};

export default CartPage;