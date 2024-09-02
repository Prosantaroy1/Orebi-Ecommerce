import ProductCard from "../../ShopPage/Product Card/ProductCard";

const NewArrivals = () => {
    return (
        <div className="container py-12  mx-auto">
            <div>
                <h3 className="text-3xl md:px-1 px-5 font-fontAb font-medium">New Arrivals</h3>
            </div>
            <div className="grid md:grid-cols-4  grid-cols-1  pt-8 gap-14 items-center">
                 <ProductCard/>
                 <ProductCard/>
                 <ProductCard/>
                 <ProductCard/>
            </div>
        </div>
    );
};

export default NewArrivals;