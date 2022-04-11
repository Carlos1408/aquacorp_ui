import products from '../data/products.json'
import ProductCard from '../components/ProductCard'

export default function Shop() {
    return (
        <div>
            <h1>Shop</h1>
            {products.map(({id, name, price, description, image_url}) => (
                <div key={id}>
                    <ProductCard id={id} name={name} price={price} description={description} image_url={image_url} />
                </div>
            ))};
        </div>
    );
}