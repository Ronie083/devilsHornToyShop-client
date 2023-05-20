import PropTypes from 'prop-types';

const CatTab = ({ category }) => {

    const { toys } = category;


    return (
        <div className='md:flex justify-between'>
            {
                toys.map(toy =>
                    <div key={toy.toy_id} className="card text-left w-96 bg-base-100 shadow-2xl my-10">
                        <figure><img src={toy.pictureURL} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {toy.name}
                                <div className="badge badge-secondary">{toy.rating}</div>
                            </h2>
                            <p>{toy.description}</p>
                            <div className="card-actions">
                                <div className="badge badge-outline">Price: {toy.price} </div>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-outline btn-error">View Details</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};


CatTab.propTypes = {
    category: PropTypes.shape({
        toys: PropTypes.arrayOf(
            PropTypes.shape({
                toy_id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

export default CatTab;