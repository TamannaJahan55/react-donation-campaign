

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/R9R4p50/donation-cover.jpg)' }}>
                <div className="hero-overlay bg-white bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w">
                        <h1 className="mb-5 text-5xl text-black font-bold">I Grow By Helping People In Need</h1>
                        <div className="flex justify-center items-center">
                            <input type="text" placeholder="Search here..." className="border border-[#DEDEDE] rounded-l-lg w-80 h-12 p-2" />
                            <button className="text-white border border-[#FF444A] rounded-r-lg h-12 px-4 py-2 bg-[#FF444A] normal-case">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;