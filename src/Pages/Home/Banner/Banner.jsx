

const Banner = () => {
    return (
        <div>
            <div className="mx-auto max-w-5xl rounded-lg carousel w-full m-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1565991336106-8bf0a1261870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1091&q=80" className="w-full" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle btn-outline">❮</a>
                        <div className="hero md:min-h-screen  flex items-end justify-center">
                            <div className="hero-content text-center">
                                <div className="max-w-fit text-white">
                                    <h1 className="text-2xl md:text-5xl font-bold">Hello there</h1>
                                    <p className="py-6">Embrace the Power of Collectible Heroes</p>
                                    <button className="btn glass">Explore Our Action Figures</button>
                                </div>
                            </div>
                        </div>
                        <a href="#slide2" className="btn btn-circle btn-outline">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://cdn.dribbble.com/users/772985/screenshots/17053924/media/c0a9495efdb05765475c681668cd3122.jpg?compress=1&resize=1000x750&vertical=top" className="w-full" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle btn-outline">❮</a>
                        <div className="hero md:min-h-screen  flex items-end justify-center">
                            <div className="hero-content text-center">
                                <div className="max-w-fit text-white">
                                    <h1 className="text-2xl md:text-5xl font-bold">Hello there</h1>
                                    <p className="py-6">Embrace the Power of Collectible Heroes</p>
                                    <button className="btn glass">Explore Our Action Figures</button>
                                </div>
                            </div>
                        </div>
                        <a href="#slide3" className="btn btn-circle btn-outline">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1628864021318-17265a845a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80" className="w-full" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle btn-outline">❮</a>
                        <div className="hero md:min-h-screen  flex items-end justify-center">
                            <div className="hero-content text-center">
                                <div className="max-w-fit text-white">
                                    <h1 className="text-2xl md:text-5xl font-bold">Hello there</h1>
                                    <p className="py-6">Embrace the Power of Collectible Heroes</p>
                                    <button className="btn glass">Explore Our Action Figures</button>
                                </div>
                            </div>
                        </div>
                        <a href="#slide4" className="btn btn-circle btn-outline">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://images.unsplash.com/photo-1592547097938-7942b22df3db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" className="w-full" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle btn-outline">❮</a>
                        <div className="hero md:min-h-screen  flex items-end justify-center">
                            <div className="hero-content text-center">
                                <div className="max-w-fit text-white">
                                    <h1 className="text-2xl md:text-5xl font-bold">Hello there</h1>
                                    <p className="py-6">Embrace the Power of Collectible Heroes</p>
                                    <button className="btn glass">Explore Our Action Figures</button>
                                </div>
                            </div>
                        </div>
                        <a href="#slide1" className="btn btn-circle btn-outline">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;