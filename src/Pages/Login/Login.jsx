import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="container mx-auto rounded-lg hero min-h-screen bg-base-200" style={{ backgroundImage: `url("https://wallpapercave.com/wp/G3XZ1A1.jpg")` }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold my-5 text-white">Login now!</h1>
                    <hr />
                    <p className="text-white my-5">If you don&apos;t have an account <Link className="text-blue-500 font-bold text-lg" to="/signup">SignUp</Link> now</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <submit className="btn btn-primary">Submit</submit>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;