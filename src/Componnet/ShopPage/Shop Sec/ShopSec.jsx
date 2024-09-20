import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../Product Card/ProductCard";
import { MdWindow } from "react-icons/md";
import { TfiMenuAlt } from "react-icons/tfi";
import PagitionBar from "../../pagitionBar/pagitionBar";

const ShopSec = () => {
    // States for products, filters, and pagination
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products

    const [filterTitle, setFilterTitle] = useState("");
    const [filterColor, setFilterColor] = useState("");
    const [filterPrice, setFilterPrice] = useState([0, 300]); // Price range

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data); // Initially set to full products list
            });
    }, []);

    // Update filtered products based on filters
    useEffect(() => {
        let filtered = products;

        // Filter by title/category
        if (filterTitle) {
            filtered = filtered.filter(product =>
                product.category.toLowerCase().includes(filterTitle.toLowerCase())
            );
        }

        // Filter by color
        if (filterColor) {
            filtered = filtered.filter(product => product.color.toLowerCase() === filterColor.toLowerCase());
        }

        // Filter by price
        filtered = filtered.filter(product =>
            product.price >= filterPrice[0] && product.price <= filterPrice[1]
        );

        setFilteredProducts(filtered);
    }, [filterTitle, filterColor, filterPrice, products]);

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(5);

    const lastIndex = postPerPage * currentPage;
    const firstIndex = lastIndex - postPerPage;
    const PostProducts = filteredProducts.slice(firstIndex, lastIndex);

    const pagitions = (number) => setCurrentPage(number);

    const resetFilters = () => {
        setFilterTitle('');
        setFilterColor('');
        setFilterPrice([0, 300]);
        setFilteredProducts(products);
    }

    return (
        <div className="py-16 px-2 container mx-auto">
            {/* Brand */}
            <div>
                <h3 className="font-fontAb font-semibold text-3xl">Store Products</h3>
                <div className="breadcrumbs pt-4 text-sm">
                    <ul>
                        <li className="text-xl"><NavLink to='/'>Home</NavLink></li>
                        <li className="text-xl">Store</li>
                    </ul>
                </div>
            </div>

            {/* Product */}
            <div className="pt-16">
                <div className="grid items-start grid-cols-4 gap-5">
                    {/* Left part */}
                    <div className="h-screen md:block hidden">
                        {/* Category */}
                        <div className="font-fontAb">
                            <h4 className="font-semibold text-xl lg:text-2xl">Shop by Category</h4>
                            <ul className="flex flex-col text-xl gap-2 pt-3 ">
                                <li className="hover:bg-black hover:text-white py-2 px-3 rounded" onClick={resetFilters}>All</li>
                                <li className="hover:bg-black hover:text-white py-2 px-3 rounded" onClick={() => setFilterTitle('encre')}>Encre</li>
                                <li className="hover:bg-black hover:text-white py-2 px-3 rounded" onClick={() => setFilterTitle('ruban')}>Ruban</li>
                                <li className="hover:bg-black hover:text-white py-2 px-3 rounded" onClick={() => setFilterTitle('imprimante')}>Imprimante</li>
                                <li className="hover:bg-black hover:text-white py-2 px-3 rounded" onClick={() => setFilterTitle('bac de dechet')}>Bac de dechet</li>
                            </ul>
                        </div>

                        {/* Price Filter */}
                        <div className="font-fontAb pt-6 pb-5">
                            <h4 className="font-semibold text-2xl">Shop by Price</h4>
                            <ul className="flex flex-col text-xl gap-5 pt-3">
                                <li className="hover:bg-black hover:text-white py-2 px-3 rounded" onClick={() => setFilterPrice([1, 50])}>1-50</li>
                                <li className="hover:bg-black hover:text-white py-2 px-3 rounded" onClick={() => setFilterPrice([50, 100])}>50-100</li>
                                <li className="hover:bg-black hover:text-white py-2 px-3 rounded" onClick={() => setFilterPrice([100, 200])}>100-200</li>
                                <li className="hover:bg-black hover:text-white py-2 px-3 rounded" onClick={() => setFilterPrice([200, 300])}>200-300</li>
                            </ul>
                        </div>

                        {/* Color Filter */}
                        <div className="font-fontAb">
                            <h4 className="font-semibold text-2xl">Shop by Color</h4>
                            <ul className="flex flex-col text-xl gap-5 pt-3 px-2">
                                <li className="flex items-center gap-2" onClick={() => setFilterColor('red')}><input type="radio" name="radio-8" className="radio radio-error" />Red</li>
                                <li className="flex items-center gap-2" onClick={() => setFilterColor('blue')}><input type="radio" name="radio-8" className="radio checked:bg-blue-600" />Blue</li>
                                <li className="flex items-center gap-2" onClick={() => setFilterColor('green')}><input type="radio" name="radio-8" className="radio checked:bg-green-600" />Green</li>
                                <li className="flex items-center gap-2" onClick={() => setFilterColor('black')}><input type="radio" name="radio-8" className="radio checked:bg-pink-600" />Black</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right part */}
                    <div className="md:col-span-3 col-span-4 h-auto">
                        <div className="flex mb-8 items-center justify-between font-fontAb">
                            <div className="flex items-center gap-5">
                                <MdWindow className="text-3xl" />
                                <TfiMenuAlt className="text-3xl" />
                            </div>
                            <div className="flex items-center gap-5">
                                <h4 className="font-medium text-xl">Sort by :</h4>
                                <select className="select select-bordered" onChange={(e) => setFilterTitle(e.target.value)}>
                                    <option defaultValue={'ruban'}>Featured</option>
                                    <option value="imprimante">Imprimante</option>
                                    <option value="encre">Encre</option>
                                    <option value="ruban">Ruban</option>
                                </select>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 items-center mb-5 gap-24">
                            {
                                PostProducts.map((item, id) => <ProductCard
                                    key={id}
                                    item={item}
                                />)
                            }
                        </div>

                        {/* Pagination Bar */}
                        <PagitionBar
                            postPerPage={postPerPage}
                            totalPost={filteredProducts.length}
                            pagition={pagitions}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopSec;
