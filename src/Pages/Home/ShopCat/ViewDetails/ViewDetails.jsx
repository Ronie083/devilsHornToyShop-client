import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    const toys = useLoaderData().toys;
    console.log(toys)
    return (
        <div className="p-10" style={{
            background: "linear-gradient(to bottom, #CAD5E2, #FF4331)",
        }}>
            {toys.map((toy) => (
                <div key={toy.toy_id} className="card text-white container mx-auto max-w-5xl glass">
                    <figure><img className="border-8" src={toy.pictureURL} alt="car!" /></figure>
                    <div className="card-body grid grid-cols-3 justify-items-center">
                        <div>
                            <h2 className="card-title text-3xl font-bold">{toy.name}</h2>
                            <p>Seller&apos;s Name: {toy.sellerName}</p>
                            <p className="my-1">Seller&apos;s Email: {toy.sellerEmail}</p>
                            <div className="badge badge-primary">Ratting: {toy.rating}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill ml-2" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /> </svg>
                            </div>
                            <div className="badge badge-primary mx-2">Price: ${toy.price}</div>
                            <div className="badge badge-primary">Available: {toy.availableQuantity} Pieces</div>
                        </div>
                        <div className="divider lg:divider-horizontal"></div> 
                        <div>
                            <h1 className="font-bold text-xl">Caption-</h1>
                            <p className="text-3xl font-semibold ">{toy.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ViewDetails;