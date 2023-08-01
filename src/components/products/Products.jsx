import PropTypes from 'prop-types'; // Import the prop-types library
import './Products.css';

const Products = (props) => {
    const { name, seller, img, ratings, stock, price, category } = props.product;
    const handleEvent = props.handleEvent;
    return (
        <div className='product'>
            <div className='info'>
                <img src={img} alt="" srcSet="" />
                <h2>Name: {name}</h2>
                <h5>Category: {category}</h5>
                <h5>seller: {seller}</h5>
                <h5>price: ${price}</h5>
                <h5>Ratings: {ratings} Star</h5>
                <h5>Stock: {stock}</h5>
            </div>
            <button onClick={() => handleEvent(props.product)} className='btn-cart'>Add to cart</button>
        </div>
    );
};



// Add prop types validation for the Products component
Products.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        seller: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired, // Validate the img prop as a required string
        ratings: PropTypes.number.isRequired,
        stock: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        // handleEvent: PropTypes.number.isRequired,
    }).isRequired,
    handleEvent: PropTypes.func.isRequired,
};

export default Products;
