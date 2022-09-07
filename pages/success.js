import { useEffect} from "react";
import { useStateContext } from "../Context/Context";
import { BsBagCheckFill} from 'react-icons/bs'
import Link from "next/link";
import Confetti from "../LIB/utils";
const Success = () => {
    const { setCartItems , setTotalPrice , setTotalQuantities } = useStateContext()
    
    useEffect(()=>
    {
        localStorage.clear()
        Confetti()
        setCartItems([])
        setTotalPrice(0)
        setTotalQuantities(0)
    },[])

    return ( 
        <div className="success-wrapper">
            <div className="success">
                <p className="icon">
                    <BsBagCheckFill />
                </p>
                <h2>Thank you for your purchase!</h2>
                <p className="email-msg">
                    Check you email for more info
                </p>
                <p className="description">
                    For more queries,please email us
                    <a href="mailto:aftabmohammedk1234@gmail.com" className="email">
                        aftabmohammedk1234@gmail.com
                    </a>
                </p>
                <Link href='/'>
                    <button type='button' className="btn">Home</button>
                </Link>
            </div>
        </div>
     );
}
 
export default Success;