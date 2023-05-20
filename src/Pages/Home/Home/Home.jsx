import Banner from "../Banner/Banner";
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
        </div>
    );
};

export default Home;