

const Home = () => {
    return (
        <div>
            <div className="container mx-auto max-w-5xl carousel w-full m-10">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://cdn.dribbble.com/users/772985/screenshots/15789791/media/ab4f2798ba022aad1954f5805fda1914.png?compress=1&resize=1000x750&vertical=top" className="w-full" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle btn-outline">❮</a>
                        <div className="hero min-h-screen flex items-end justify-center">
                            <div className="hero-content text-center">
                                <div className="max-w-md text-white">
                                    <h1 className="text-5xl font-bold">Hello there</h1>
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
                        <div className="hero min-h-screen text-white flex items-end justify-center">
                            <div className="hero-content text-center">
                                <div className="max-w-md">
                                    <h1 className="text-5xl font-bold">Hello there</h1>
                                    <p className="py-6">Embrace the Power of Collectible Heroes</p>
                                    <button className="btn glass">Explore Our Action Figures</button>
                                </div>
                            </div>
                        </div>
                        <a href="#slide3" className="btn btn-circle btn-outline">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://cdn.dribbble.com/userupload/3893455/file/original-50c1493cf4ff6a52c9d6fb8f677e3918.png?compress=1&resize=1024x768" className="w-full" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle btn-outline">❮</a>
                        <div className="hero min-h-screen text-white flex items-end justify-center">
                            <div className="hero-content text-center">
                                <div className="max-w-md">
                                    <h1 className="text-5xl font-bold">Hello there</h1>
                                    <p className="py-6">Embrace the Power of Collectible Heroes</p>
                                    <button className="btn glass">Explore Our Action Figures</button>
                                </div>
                            </div>
                        </div>
                        <a href="#slide4" className="btn btn-circle btn-outline">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://cdn.dribbble.com/userupload/4158481/file/original-0cdcfec744ab56aed66af45951941a85.png?compress=1&resize=1024x768" className="w-full" />
                    <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle btn-outline">❮</a>
                        <div className="hero min-h-screen text-white flex items-end justify-center">
                            <div className="hero-content text-center">
                                <div className="max-w-md">
                                    <h1 className="text-5xl font-bold">Hello there</h1>
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

export default Home;