import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Gallery from "../Gallery/Gallery";
import InfoSec from "../InfoSec/InfoSec";
import ShopCat from "../ShopCat/ShopCat";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <Gallery></Gallery>
            <InfoSec></InfoSec>
            <ShopCat></ShopCat>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;