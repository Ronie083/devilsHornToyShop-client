import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const toyAdd = useLoaderData();
  const sellerEmails = toyAdd.map((toy) => toy?.sellerEmail);
  const [toysAdded, setToysAdded] = useState([]);
  const [showAllToys, setShowAllToys] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredToys, setFilteredToys] = useState([]);

  console.log(toysAdded);

  useEffect(() => {
    const url = `http://localhost:5000/addedtoy?sellerEmail=${sellerEmails}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setToysAdded(data);
      });
  }, []);

  useEffect(() => {
    const filtered = toysAdded.filter((toy) =>
      toy.toyName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredToys(filtered);
  }, [toysAdded, searchQuery]);

  const handleViewAllToys = () => {
    setShowAllToys(true);
  };

  const limitedToys = showAllToys ? filteredToys : filteredToys.slice(0, 20);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold text-center my-5">
        Here are all the toys you added
      </h1>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          className="px-2 py-1 border border-red-600 rounded-xl"
          placeholder="Search by Toy Name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Name & Picture</th>
              <th>Seller Name & Email</th>
              <th>Quantity</th>
              <th>Sub-category</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {limitedToys.map((toyAdded) => (
              <tr key={toyAdded._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={toyAdded.photoUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
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
                  <span className="badge badge-ghost badge-sm">
                    {toyAdded.sellerEmail}
                  </span>
                </td>
                <td>{toyAdded.quantity}</td>
                <td>{toyAdded.subCategory}</td>
                <td>{toyAdded.description}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">View Details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        {!showAllToys && filteredToys.length > 20 && (
          <div className="text-center my-5">
            <button
              className="btn btn-primary"
              onClick={handleViewAllToys}
            >
              View All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllToys;
