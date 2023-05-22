import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../provider/AuthProvider';
import Aos from 'aos';
import 'aos/dist/aos.css';

const CatTab = ({ category }) => {

    const { toys } = category;

    const {user} = useContext(AuthContext);
    console.log(user)

    useEffect(() =>{
        Aos.init({duration: 2000});
    }, [])
    
    

    return (
        <div className='md:flex justify-between' data-aos = "fade-right">
            {
                toys.map(toy =>
                    <div key={toy.toy_id} className="card text-left w-96 bg-base-100 shadow-2xl my-10">
                        <figure><img src={toy.pictureURL} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {toy.name}
                                <div className="badge badge-secondary p-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill mr-2" viewBox="0 0 16 16"> <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /> </svg>
                                    {toy.rating}</div>
                            </h2>
                            <p>{toy.description}</p>
                            <div className="card-actions">
                                <div className="badge badge-outline p-4">Price: {toy.price}$ </div>
                            </div>
                            <div className="card-actions justify-end">
                                <Link to={`/viewdetails/${toy.toy_id}`} className="btn btn-error">View Details</Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
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