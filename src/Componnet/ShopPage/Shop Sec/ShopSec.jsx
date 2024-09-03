import { NavLink } from "react-router-dom";
import { useState,useEffect } from "react";
import ProductCard from "../Product Card/ProductCard";


const ShopSec = () => {
    // 
    const [products, setProducts]= useState([]);

    useEffect(()=>{
        fetch('product.json')
        .then(res=> res.json())
        .then(data=>{
            setProducts(data)
        })
    },[])

    // console.log(products)

    return (
        <div className="py-16 container mx-auto">
            {/* brand */}
            <div>
                <h3 className="font-fontAb font-semibold text-3xl">Store Products</h3>
                {/* link */}
                <div className="breadcrumbs pt-4 text-sm">
                    <ul>
                        <li className="text-xl"><NavLink to='/'>Home</NavLink></li>
                        <li className="text-xl">Store</li>
                    </ul>
                </div>
            </div>
            {/*product*/}
            <div className="pt-6">
                <div className="grid items-start grid-cols-4 gap-5">
                    {/* left part */}
                    <div className="pt-12 h-screen ">
                        {/* categroy */}
                        <div className="font-fontAb">
                            <h4 className="font-semibold text-xl">Shop by Category</h4>
                            <ul className="flex flex-col gap-2 pt-3 ">
                                <li className="hover:bg-black hover:text-white  py-2 px-3 rounded">encre</li>
                                <li className="hover:bg-black hover:text-white  py-2 px-3 rounded">Ruban</li>
                                <li className="hover:bg-black hover:text-white  py-2 px-3 rounded">imprimante</li>
                                <li className="hover:bg-black hover:text-white  py-2 px-3 rounded">Bac de dechet</li>
                            </ul>
                        </div>
                        {/* price filter */}
                        <div className="font-fontAb pt-6 pb-5">
                            <h4 className="font-semibold text-xl">Shop by Price</h4>
                            <ul className="flex flex-col gap-5 pt-3">
                                <li className="hover:bg-black hover:text-white  py-2 px-3 rounded">1-50</li>
                                <li className="hover:bg-black hover:text-white  py-2 px-3 rounded">50-100</li>
                                <li className="hover:bg-black hover:text-white  py-2 px-3 rounded">100-200</li>
                                <li className="hover:bg-black hover:text-white  py-2 px-3 rounded">200-300</li>
                            </ul>
                        </div>
                        {/* color filter */}
                        <div className="font-fontAb">
                            <h4 className="font-semibold text-xl">Shop by Color</h4>
                            <ul className="flex flex-col gap-5 pt-3 px-2">
                                <li className="flex items-center gap-2"><input type="radio" name="radio-8" className="radio radio-error" />red</li>
                                <li className="flex items-center gap-2"> <input type="radio" name="radio-8" className="radio checked:bg-blue-600" />Blue</li>
                                <li className="flex items-center gap-2"> <input type="radio" name="radio-8" className="radio checked:bg-green-600" />Green</li>
                                <li className="flex items-center gap-2"> <input type="radio" name="radio-8" className="radio checked:bg-pink-600" />Pink</li>
                            </ul>
                        </div>
                    </div>
                    {/* right part */}
                    <div className="col-span-3 h-auto">
                        <div className="grid grid-cols-3 gap-12">
                            {
                                products.map((item,id)=><ProductCard
                                key={id}
                                item={item}
                                ></ProductCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopSec;