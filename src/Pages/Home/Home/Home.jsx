import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import InfoSec from "../InfoSec/InfoSec";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Banner></Banner>
            <Gallery></Gallery>
            <InfoSec></InfoSec>
        </div>
    );
};

export default Home;