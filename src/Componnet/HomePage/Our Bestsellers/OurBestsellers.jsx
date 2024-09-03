import { useEffect, useState } from "react";
import ProductCard from "../../ShopPage/Product Card/ProductCard";

const OurBestsellers = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    const bestFilter= products.filter((card)=>card.category === 'Bac de dechet');
    
    return (
        <div>
            <div className="container py-12  mx-auto">
            <div>
                <h3 className="text-4xl md:px-1 px-5 font-fontAb font-medium">Our Bestsellers</h3>
            </div>
            <div className="grid md:grid-cols-4  grid-cols-1  pt-12 gap-14 items-center">
                {
                    bestFilter.map((item,id)=><ProductCard
                     key={id}
                     item={item}
                    ></ProductCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default OurBestsellers;