

const AddAToy = () => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        
                    </div>
                    <div className="card  w-full shadow-2xl bg-base-100">
                        <div className="card-body grid grid-cols-3 gap-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" placeholder="photoURL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller name</span>
                                </label>
                                <input type="text" placeholder="seller name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <input type="text" placeholder="seller email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Sub-category </span>
                                </label>
                                <input type="text" placeholder="sub-category" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="price" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <input type="text" placeholder="Rating" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Available quantity</span>
                                </label>
                                <input type="text" placeholder="available quantity" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Detail description</span>
                                </label>
                                <input type="text" placeholder="detail description" className="input input-bordered" />
                            </div>
                        </div>
                            
                        <div className="form-control m-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddAToy;