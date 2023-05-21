import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddAToy = () => {

    const {user} = useContext(AuthContext);

    const handleAddToy = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photoURL.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const description = form.description.value;
        const addedToy ={
            toyName: name,
            sellerName,
            sellerEmail,
            subCategory: category,
            price,
            rating,
            quantity,
            description,
            photoUrl: photo
        }
        console.log(addedToy);

        fetch('http://localhost:5000/addedtoy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                toast('Your toy added to collection')
            }
        })
    }
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add a Toy from Here</h1>

                    </div>
                    <form onSubmit={handleAddToy}>
                        <div className="card  w-full shadow-2xl bg-base-100">
                            <div className="card-body grid grid-cols-3 gap-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PhotoURL</span>
                                    </label>
                                    <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="toy name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller name</span>
                                    </label>
                                    <input type="text" name="sellerName" defaultValue={user?.name} placeholder="seller name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <input type="text" name="sellerEmail" defaultValue={user?.email} placeholder="seller email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Sub-category </span>
                                    </label>
                                    <input type="text" name="category" placeholder="sub-category" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Price</span>
                                    </label>
                                    <input type="text" name="price" placeholder="price" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Rating</span>
                                    </label>
                                    <input type="text" name="rating" placeholder="rating" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Available quantity</span>
                                    </label>
                                    <input type="text" name="quantity" placeholder="available quantity" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Detail description</span>
                                    </label>
                                    <input type="text" name="description" placeholder="detail description" className="input input-bordered" />
                                </div>
                            </div>

                            <div className="form-control m-6">
                                <input className="btn btn-primary" type="submit" value="Add The toy" />
                                <ToastContainer></ToastContainer>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAToy;