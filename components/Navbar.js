import Link from "next/link";
import { AiOutlineShopping } from 'react-icons/ai'
import { useStateContext } from "../Context/Context";
import Cart from "./Cart";
import Image from "next/image";

const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext()
    return (
        <div className="navbar-container">
            <Link href='/'>
                <Image
                    src='/ecommerce.png'
                    width={30}
                    height={30}
                    layout='fixed'
                />
            </Link>
            <p>
                <Link href='/'>Ecommerce</Link>
            </p>
            <button type='button' className="cart-icon" onClick={() => setShowCart(true)}>
                <AiOutlineShopping />
                <span className="cart-item-qty">
                    {totalQuantities}
                </span>
            </button>
            {showCart && <Cart />}
        </div>
    );
}
export default Navbar;

