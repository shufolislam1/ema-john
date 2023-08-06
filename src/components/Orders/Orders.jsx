import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";

const Orders = () => {
    const products = useLoaderData();
    return (
        <>
            <div className="shop-container">
                <div className="product-container">
                    <h2>This is orders: {products.length}</h2>
                </div>
                <div className='cart-container'>
                    <Cart cart={[]}></Cart>
                </div>
            </div>
        </>
    );
};

export default Orders;