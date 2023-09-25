import { useEffect, useState } from "react";
import Category from "../Category/Category";



const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    
    useEffect(() =>{
        fetch('donations.json')
        .then(res => res.json())
        .then(data => setCategories(data));
    } 
    , [])
    return (
        <div>
            {
                categories.map(categoryCard => <Category key={categoryCard.id} categoryCard={categoryCard}></Category>)
            }
        </div>
    );
};

export default CategoryList;