const Gallery = () => {
    return (
        <div className="container mx-auto max-w-5xl card lg:card-side bg-base-100 shadow-xl">
            <figure className="ml-5">
                <img src="https://images.unsplash.com/photo-1584994696678-3d739b5ac1bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" alt="Album" className="rounded-lg" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold text-gray-900 mb-2">Let us help you to Unlock a World of Action-Packed Possibilities!</h2>
                <p>Come Where Dreams Become Collectible Reality & Fuel Your Passion for Action and Adventure</p>
                <ul className="steps steps-vertical">
                    <li className="step step-secondary">Choose Product</li>
                    <li className="step step-secondary">Purchase</li>
                    <li className="step step-secondary">Receive Product</li>
                    <li className="step step-primary">Register get discount and other facilities</li>
                </ul>
                <div className="card-actions">
                    <button className="btn btn-accent">Let&apos;s Start</button>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
