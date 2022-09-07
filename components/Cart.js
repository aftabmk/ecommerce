import Link from "next/link";
import { useRef } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus, AiOutlineShopping , AiOutlineDelete } from "react-icons/ai";
import { useStateContext } from "../Context/Context";
import { urlFor } from "../LIB/client";
import getStripe from "../LIB/Stripe";

const Cart = () => {
    const cartRef = useRef()
    const { totalPrice, totalQuantities, cartItems, setShowCart , toggleCartItemQuantity , onRemove} = useStateContext()
    const handleCheckout = async()=>
    {
        const stripe = await getStripe()
        const res = await fetch('/api/stripe',
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(cartItems)
        });
        if(res.statusCode === 500) return;

        const data = await res.json();
        
        toast.loading('Redirecting....')

        stripe.redirectToCheckout({ sessionId : data.id});
    }

    return (
        <div className="cart-wrapper" ref={cartRef}>
            <div className="cart-container">
                <button type='button' className="cart-heading" onClick={() => setShowCart(false)}>
                    <AiOutlineLeft />
                    <span className="heading">Your Cart</span>
                    <span className="cart-num-items">({totalQuantities} items)</span>
                </button>
                {cartItems.length < 1 &&
                    (
                        <div className="empty-cart">
                            <AiOutlineShopping size={150} color='gray' />
                            <h3 style={{ color: 'gray' }}>Your Shopping bag is empty</h3>
                            <Link href='/'>
                                <button type='button' onClick={() => setShowCart(false)} className='btn'>
                                    Continue Shopping
                                </button>
                            </Link>
                        </div>
                    )}
                <div className="product-container">
                    {cartItems.length >= 1 && cartItems.map((item) =>
                    (
                        <div className="product" key={item._id}>
                            <img src={urlFor(item?.image[0])}
                                className='cart-product-image' />
                            <div className="item-desc">
                                <div className="flex top">
                                    <h5>{item.name}</h5>
                                    <h4>₹ {item.price}</h4>
                                </div>
                                <div className="flex bottom">
                                    <div>
                                        <p className='quantity-desc'>
                                            <a className="minus" onClick={()=>toggleCartItemQuantity(item._id,'dec')}><AiOutlineMinus /></a>
                                            <span className="num">
                                                {item.quantity}
                                            </span>
                                            <a className="plus" onClick={()=>toggleCartItemQuantity(item._id,'inc')}><AiOutlinePlus /></a>
                                        </p>
                                    </div>
                                    <button
                                        type='button'
                                        className="remove-item"
                                        onClick={()=> onRemove(item)}
                                    >
                                       <AiOutlineDelete />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {cartItems.length >=1 && 
                (
                    <div className="cart-bottom">
                        <div className="total">
                            <h3>Subtotal</h3>
                            <h3>₹ {totalPrice}</h3>
                        </div>
                        <div className="btm-container">
                            <button type='button' className="btn" onClick={handleCheckout}>
                                Pay with Stripe
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;