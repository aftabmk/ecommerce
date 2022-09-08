import Link from "next/link";
import { urlFor } from "../LIB/client";

const HeroBanner = ({ heroBanner }) => {
    // console.log(heroBanner)
    return (
        <div className="hero-banner-container">
            <div>
                <p className="beats-solo">
                    {heroBanner.smallText}
                </p>
                <h3 style={{ fontSize: 'calc(25px + 1vw)', fontWeight: 600 }}>{heroBanner.midText}</h3>
                <h1 style={{ fontSize: 'calc(50px + 5vw)', fontWeight: 800, margin: 0 }}>{heroBanner.largeText1}</h1>
                <Link href={`/product/${heroBanner.product}`}>
                    <img src={urlFor(heroBanner.image)} alt='headphones' className="hero-banner-image" />
                </Link>
                <div>
                    <Link href={`/product/apple-airpods-max`}>
                        <button type='button'>{heroBanner.buttonText}</button>
                    </Link>
                    <div className="desc">
                        <h5>Description</h5>
                        <p>{heroBanner.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HeroBanner;
 
