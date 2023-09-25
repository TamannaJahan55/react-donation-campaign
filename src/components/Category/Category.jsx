import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Category = ({ categoryCard }) => {

    const { id, picture, title, category, color_for_category_bg, color_for_card_bg, color_for_text_and_button_bg } = categoryCard;

    return (
        <Link to={`/donationDetails/${id}`}>
            <div className="card card-compact w-80 h-72 bg-base-100 shadow-xl" style={{ backgroundColor: color_for_card_bg }}>
                <figure><img className='w-full h-max' src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='btn-primary w-max rounded ml-2' style={{ backgroundColor: color_for_category_bg }}>
                        <h2 className="card-title text-sm font-medium p-1" style={{ color: color_for_text_and_button_bg }}>{category}</h2>
                    </div>
                    <p className='text-lg font-semibold ml-2' style={{ color: color_for_text_and_button_bg }}>{title}</p>
                </div>
            </div>
        </Link>
    );
};

Category.propTypes = {
    categoryCard: PropTypes.object.isRequired
}

export default Category;