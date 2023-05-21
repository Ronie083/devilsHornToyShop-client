import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const ContactUs = () => {

    useEffect(() =>{
        Aos.init({duration: 2000})
    }, [])


    return (
        <div className="container mx-auto rounded-lg" data-aos="fade-left" >
            <div className="hero min-h-screen rounded-lg" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1559339484-2205377cc979?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80")` }}>
                <div className="hero-overlay bg-opacity-60 rounded-lg "></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="card bg-white text-black p-10 max-w-md text-left">
                        <h1 className="mb-3 text-3xl font-bold">Hello there</h1>
                        <h1 className="mb-5 text-5xl font-bold">VISIT OUR STORE</h1>
                        <p className="mb-5">21 W. 46th St., New York, United States</p>
                        <p className="mb-5">divil.horn.toy@gamil.com</p>
                        <p className="mb-5">+84 (800) 3333 4567</p>
                        <button className="btn btn-primary">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;