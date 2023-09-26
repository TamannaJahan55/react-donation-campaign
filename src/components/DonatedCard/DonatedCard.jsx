import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonatedCard = ({ categoryDonated }) => {
    const { id, picture, title, category, price, color_for_category_bg, color_for_card_bg, color_for_text_and_button_bg } = categoryDonated;
    return (

        <div className="box-content rounded max-w-md h-44" style={{ backgroundColor: color_for_card_bg }}>
            <div className='flex justify-between'>
                <div className='w-1/3'>
                    <img className='w-56 h-44' src={picture} alt="Shoes" />
                </div>
                <div className='w-2/3 h-44 p-3 space-y-2 ml-2'>
                    <div className='btn-primary w-max rounded' style={{ backgroundColor: color_for_category_bg }}>
                        <h2 className="text-sm font-medium p-1" style={{ color: color_for_text_and_button_bg }}>{category}</h2>
                    </div>
                    <p className='text-lg font-semibold'>{title}</p>
                    <p className='text-lg font-semibold' style={{ color: color_for_text_and_button_bg }}>${price}.00</p>
                    <Link to={`/donationDetails/${id}`}>
                        <button className='btn text-white rounded' style={{ backgroundColor: color_for_text_and_button_bg }}>View Details</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

DonatedCard.propTypes = {
    categoryDonated: PropTypes.object.isRequired
}

export default DonatedCard;