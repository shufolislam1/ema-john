import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Products from './products/Products';
const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        fetch('fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, [])
    
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => 
                // console.log(product);

                        <Products
                        key={product.id}
                        product = {product}
                        ></Products>
                    )
                }
            </div>
            <div className='cart-container'>
                <h2>cart</h2>
            </div>
        </div>
    );
};

export default Shop;