import { useEffect, useState } from "react";
import Category from "../Category/Category";



const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('donations.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }
        , [])
    return (
        <div className="max-w-7xl mx-14 my-20">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-4">
                {
                    categories.map(categoryCard => <Category key={categoryCard.id} categoryCard={categoryCard}></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;