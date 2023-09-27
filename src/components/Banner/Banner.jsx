import { useEffect, useState } from "react";
// import Category from "../Category/Category";


const Banner = () => {

    const [categoryFilter, setCategoryFilter] = useState(" ");
    const [allCategories, setAllCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);

    useEffect(() => {
        fetch('donations.json')
            .then(res => res.json())
            .then(data => setAllCategories(data));
    }
        , [])


    const handleCategoryChange = e =>{
        const enteredCategory = e.target.value
        setCategoryFilter(enteredCategory);
    }

    const handleFilterSubmit = e =>{
        e.preventDefault();
        const filtered = allCategories.filter((card) =>card.category.includes(categoryFilter));
        setFilteredCategories(filtered)
        console.log(filtered);
    }

    
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/R9R4p50/donation-cover.jpg)' }}>
                <div className="hero-overlay bg-white bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w">
                        <h1 className="mb-5 text-5xl text-black font-bold">I Grow By Helping People In Need</h1>
                        <div className="flex justify-center items-center">
                            <form onSubmit={handleFilterSubmit }>
                                <input onChange={handleCategoryChange} type="text" placeholder="Search here..." className="text-black border border-[#DEDEDE] rounded-l-lg w-80 h-12 p-2" />
                                <button type="submit" className="text-white border border-[#FF444A] rounded-r-lg h-12 px-4 py-2 bg-[#FF444A] normal-case">Search</button>
                            </form>

                            {/* <div className="max-w-7xl mx-14 my-20">
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-4">
                                      {
                                        categoryFilter.length === 12
                                        ? allCategories.map(categoryCard => <Category key={categoryCard.id} categoryCard={categoryCard}></Category>)

                                        :

                                        filteredCategories.map(categoryCard => <Category key={categoryCard.id} categoryCard={categoryCard}></Category>)
                                      }
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
 
};

export default Banner;