import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../Product Card/ProductCard";
import { MdWindow } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import PagitionBar from "../../pagitionBar/pagitionBar";


const ShopSec = () => {
    // 
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    // pagetion
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(5);
    //two
    const lastIndex = postPerPage * currentPage;
    const firstIndex = lastIndex - postPerPage;
    //three
    const PostProducts = products.slice(firstIndex, lastIndex);
    // four
    const pagitions = (number) => setCurrentPage(number);
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
            <div className="pt-16">
                <div className="grid items-start grid-cols-4 gap-5">
                    {/* left part */}
                    <div className="h-screen md:block hidden">
                        {/* categroy */}
                        <div className="font-fontAb">
                            <h4 className="font-semibold text-2xl">Shop by Category</h4>
                            <ul className="flex flex-col text-xl gap-2 pt-3 ">
                                <li className="hover:bg-black hover:text-white  py-2 px-3 rounded">encre</li>
                                <li className="hover:bg-black hover:text-white  py-2 px-3 rounded">Ruban</li>
                                <li className="hover:bg-black hover:text-white  py-2 px-3 rounded">imprimante</li>
                                <li className="hover:bg-black hover:text-white  py-2 px-3 rounded">Bac de dechet</li>
                            </ul>
                        </div>
                        {/* price filter */}
                        <div className="font-fontAb pt-6 pb-5">
                            <h4 className="font-semibold text-2xl">Shop by Price</h4>
                            <ul className="flex flex-col text-xl gap-5 pt-3">
                                <li className="hover:bg-black hover:text-white  py-2 px-3 rounded">1-50</li>
                                <li className="hover:bg-black hover:text-white  py-2 px-3 rounded">50-100</li>
                                <li className="hover:bg-black hover:text-white  py-2 px-3 rounded">100-200</li>
                                <li className="hover:bg-black hover:text-white  py-2 px-3 rounded">200-300</li>
                            </ul>
                        </div>
                        {/* color filter */}
                        <div className="font-fontAb">
                            <h4 className="font-semibold text-2xl">Shop by Color</h4>
                            <ul className="flex flex-col text-xl gap-5 pt-3 px-2">
                                <li className="flex items-center gap-2"><input type="radio" name="radio-8" className="radio radio-error" />red</li>
                                <li className="flex items-center gap-2"> <input type="radio" name="radio-8" className="radio checked:bg-blue-600" />Blue</li>
                                <li className="flex items-center gap-2"> <input type="radio" name="radio-8" className="radio checked:bg-green-600" />Green</li>
                                <li className="flex items-center gap-2"> <input type="radio" name="radio-8" className="radio checked:bg-pink-600" />Pink</li>
                            </ul>
                        </div>
                    </div>
                    {/* right part */}
                    <div className="col-span-3 h-auto">
                        <div className="flex mb-8 items-center justify-between font-fontAb">
                            <div className="flex items-center gap-5">
                                <MdWindow className="text-3xl" />
                                <TfiMenuAlt className="text-3xl" />
                            </div>
                            <div className="flex items-center gap-5">
                                <h4 className="font-medium text-xl">Sort by :</h4>
                                <select className="select select-bordered ">
                                    <option disabled selected>Featured</option>
                                    <option>Short</option>
                                    <option>meduim</option>
                                    <option>large</option>
                                </select>
                            </div>
                        </div>
                        {/* product */}
                        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 items-center mb-5 gap-24">
                            {
                                PostProducts.map((item, id) => <ProductCard
                                    key={id}
                                    item={item}
                                ></ProductCard>)
                            }
                        </div>
                        {/* pagition bar */}
                        <PagitionBar
                            postPerPage={postPerPage}
                            totalPost={products.length}
                            pagition={pagitions}
                        ></PagitionBar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopSec;