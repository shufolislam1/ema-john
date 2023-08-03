import Cart from "../Cart/Cart";

const Orders = () => {
    return (
        <>
            <div className="shop-container">
                <div className="product-container">
                    <h2>This is orders</h2>
                </div>
                <div className='cart-container'>
                    <Cart cart={[]}></Cart>
                </div>
            </div>
        </>
    );
};

export default Orders;