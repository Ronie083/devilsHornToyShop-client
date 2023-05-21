import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";



const MyToys = () => {

    const toyAdd = useLoaderData();
    const sellerEmails = toyAdd.map(toy => toy?.sellerEmail);
    const [toysAdded, setToysAdded] = useState([]);

    console.log(toysAdded);

    useEffect(() => {
        const url = `http://localhost:5000/addedtoy?sellerEmail=${sellerEmails}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setToysAdded(data)
            });
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold text-center my-5"> Toy Dashboard</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                
                            </th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Sub-category</th>
                            <th>Seller Name</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            toysAdded.map(toyAdded => <tr key={toyAdded._id}>
                                <th>
                                    <label>
                                    <button className="btn btn-ghost btn-xs">Edit</button>
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={toyAdded.photoUrl} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{toyAdded.toyName}</div>
                                            <div className="text-sm opacity-50">{toyAdded.rating}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {toyAdded.sellerName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{toyAdded.sellerEmail}</span>
                                </td>
                                <td>{toyAdded.quantity}</td>
                                <td>{toyAdded.subCategory}</td>
                                <td>{toyAdded.description}</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;