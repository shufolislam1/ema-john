import logo from '../assets/images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" srcSet="" />
            <div>
                <a href="/shop">shop</a>
                <a href="/order">order</a>
                <a href="/Inventory">Inventory</a>
                <a href="/Login">Login</a>
            </div>
        </div>
    );
};

export default Header;