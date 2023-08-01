import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Products from './products/Products';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const[cart, setCart] = useState([]);

    useEffect(()=> {
        fetch('fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, [])
    
    const handleEvent = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => 
                // console.log(product);

                        <Products
                        key={product.id}
                        product = {product}
                        handleEvent = {handleEvent}
                        ></Products>
                    )
                }
            </div>
            <div className='cart-container'>
                <h4>Order Summary</h4>
                <p>Selected Items:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;