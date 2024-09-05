import { useEffect, useState } from "react";
import ProductCard from "../../ShopPage/Product Card/ProductCard";

const NewArrivals = () => {
    // 
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    const NewFilter = products.filter((card) => card.category === 'Ruban');

    return (
        <div className="container py-12  mx-auto">
            <div>
                <h3 className="text-4xl md:px-1 px-5 font-fontAb font-medium">New Arrivals</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  grid-cols-1  pt-12 gap-14 items-center">
                {
                    NewFilter.map((item, id) => <ProductCard
                        key={id}
                        item={item}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default NewArrivals;