import { Link } from "react-router-dom";

const Notfound = () => {
    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("https://images.alphacoders.com/252/thumb-1920-252771.jpg")` }}>
            <div className="hero-content text-left max-w-xl mr-96">
                <div>
                    <h1 className="text-5xl font-bold">404 PAGE NOT FOUND</h1>
                    <p className="py-6">Check that you typed the address correctly, go back to your previous page or try using our site search to find something specific.</p>
                    <Link to="/" className="btn btn-primary">Go Home</Link>
                </div>
            </div>
        </div>
    );
};

export default Notfound;