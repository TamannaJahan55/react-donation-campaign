

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/R9R4p50/donation-cover.jpg)'}}>
            <div className="hero-overlay bg-white bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">I Grow By Helping People In Need</h1>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;