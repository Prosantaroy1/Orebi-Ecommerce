import imgOne from '../../../assets/img/Product/product.png'

const ProductCard = () => {
    return (
        <div>
            <div className="card relative card-compact bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={imgOne}
                        alt="Shoes" className='h-60 w-full' />
                        
                </figure>
                {/* new */}
                <div className='absolute right-5 rounded top-4'>
                    <h3 className='bg-black text-white rounded px-3 py-2 inline-block'>New</h3>
                </div>
                <div className="card-body">
                    <h2 className="card-title font-fontAb font-semibold">Bag Product</h2>
                    <p className='font-fontAb font-medium'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit reiciendis, quisquam temporibus eos quae ratione!
                    </p>
                    <div className="card-actions pt-4 justify-between">
                        <button className="btn btn-primary">Buy Now</button>
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;