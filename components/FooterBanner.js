import Link from "next/link";
import { urlFor } from "../LIB/client";

const FooterBanner = ({ footerBanner: { discount, largeText1, largeText2, saleTime, desc, smallText, midText, product, buttonText, image } }) => {

    return (
        <div className="footer-banner-container">
            <div className="banner-desc">
                <div className="left">
                    <p>{discount}</p>
                    <h3>{largeText1}</h3>
                    <h3>{largeText2}</h3>
                    <h3>{saleTime}</h3>
                </div>
                <div className="right">
                    <p>{smallText}</p>
                    <h3>{midText}</h3>
                    <p>{desc}</p>
                    <Link href={`/product/${product}`}>
                        <button type='button'>{buttonText}</button>
                    </Link>
                </div>
                <Link href={`/product/${product}`}>
                    <img src={urlFor(image)} className='footer-banner-image' width={'350px'} />
                </Link>
            </div>
        </div>
    );
}

export default FooterBanner;