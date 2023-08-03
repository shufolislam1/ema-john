import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Products from '../products/Products';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../assets/utilities/fakedb';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {

        // const load = async () => {
        //     try{
        //         const res = await fetch('fakeData/products.json')
        //         const data = await res.json();
        //         setProducts(data);
        //     }catch(err){
        //         console.log(err);
        //     }
        // }
        // load();

        fetch('fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])

    useEffect(() => {

        // mane local storage e jeta thake           id            : quantity 
        // storedCart dekhte emon           (sdffhue646fg45345fd45:1/2/4)


        const storedCart = getShoppingCart();
        let finalCart = [];


        // object er upor for in loop
        for (const id in storedCart) {
            const addedProductInLocalStorage = products.find(product => product.id === id)  //finding added product from local storage using id (product{eita hoilo upor e sob product theke find koira ekta product er id} er id === addedProductInLocalStorage er id)

            if (addedProductInLocalStorage) {
                const quantity = storedCart[id];
                addedProductInLocalStorage.quantity = quantity;
                finalCart.push(addedProductInLocalStorage);
            }
        }
        setCart(finalCart);
    }, [products])

    const handleEvent = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product =>
                        // console.log(product);

                        <Products
                            key={product.id}
                            product={product}
                            handleEvent={handleEvent}
                        ></Products>
                    )
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;