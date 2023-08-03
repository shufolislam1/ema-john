import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" srcSet="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/order">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/Login">Login</Link>
            </div>
        </div>
    );
};

export default Header;