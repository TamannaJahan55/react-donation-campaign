import PropTypes from 'prop-types';

const Category = ({categoryCard}) => {

    const {picture, title, category, color_for_category_bg, color_for_card_bg, color_for_text_and_button_bg} = categoryCard;
    
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl" style={{backgroundColor: color_for_card_bg}}>
            <figure><img className='w-full' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <div className='btn-primary w-max rounded ml-3' style={{backgroundColor: color_for_category_bg}}> 
                   <h2 className="card-title p-1" style={{color: color_for_text_and_button_bg}}>{category}</h2>
                </div>
                <p className='ml-3' style={{color: color_for_text_and_button_bg}}>{title}</p>
            </div>
        </div>
    );
};

Category.propTypes = {
    categoryCard: PropTypes.object.isRequired
}

export default Category;