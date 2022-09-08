import Link from "next/link";
import { AiOutlineShopping } from 'react-icons/ai'
import { useStateContext } from "../Context/Context";
import Cart from "./Cart";
<<<<<<< HEAD
// use Image property in Nextjs
import Image from "next/image";
=======
import png from "../public/ecommerce.png"
>>>>>>> 047987a3d47bd6c372a9d7b8017de083aafb2fa8

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
<<<<<<< HEAD
                <Link href='/'>
                    <h2>Ecommerce</h2>
                </Link>
=======
                <img src={png} href="/" />
                <Link href='/'>Ecommerce</Link>
>>>>>>> 047987a3d47bd6c372a9d7b8017de083aafb2fa8
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
<<<<<<< HEAD

export default Navbar;
=======
 
export default Navbar;
>>>>>>> 047987a3d47bd6c372a9d7b8017de083aafb2fa8
