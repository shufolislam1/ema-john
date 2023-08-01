import PropTypes from 'prop-types'; // Import PropTypes
import './Cart.css'

const Cart = ({ cart }) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // 
        product.quantity = product.quantity || 1;
        totalPrice += product.price;
        totalShipping += product.shipping;
        quantity+= product.quantity;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items:{quantity}</p>
            <p>Total price: ${totalPrice}</p>
            <p>Total Shipping: ${totalShipping}</p>
            <p>tax: ${tax.toFixed(2)}</p>
            <h2>Grand Total: ${grandTotal.toFixed(2)}</h2>
        </div>
    );
};


// Add PropTypes validation
Cart.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            price: PropTypes.number.isRequired,
            // Add other required properties of the product object here if necessary
        })
    ).isRequired,
};


export default Cart;