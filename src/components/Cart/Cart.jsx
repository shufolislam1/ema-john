import PropTypes from 'prop-types'; // Import PropTypes
import './Cart.css'

const Cart = ({ cart }) => {
    let totalPrice = 0;
    for (const product of cart) {
        totalPrice += product.price;
    }
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items:{cart.length}</p>
            <p>Total price:{totalPrice}</p>
            <p>Total Shipping:{ }</p>
            <p>tax:{ }</p>
            <h2>Grand Total: </h2>
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