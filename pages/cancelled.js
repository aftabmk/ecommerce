import { useEffect } from "react";
import { useStateContext } from "../Context/Context";
import { MdError } from 'react-icons/md'
import { SiHomeassistantcommunitystore } from 'react-icons/si'
import Link from "next/link";

const Cancelled = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()

    useEffect(() => {
        localStorage.clear()
        setCartItems([])
        setTotalPrice(0)
        setTotalQuantities(0)
    }, [])

    return (
        <div className="success-wrapper">
            <div className="success">
                <p className="icon">
                    <MdError color="#f02d34" />
                </p>
                <h2>An Error has occured</h2>
                <p className="description">
                    Go back to Home
                </p>
                <Link href='/'>
                    <button type='button' className="btn" >
                        <SiHomeassistantcommunitystore />
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Cancelled;