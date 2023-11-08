


const Header = () => {
    return (
        <div className="hero min-h-[40vh] lg:min-h-[60vh] mb-7" style={{ backgroundImage: 'url(https://i.ibb.co/HrgGMHy/10136775-17973908.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-2xl lg:text-5xl font-bold"><span className=" text-black">ASSINGMENT </span> <span className="text-blue-800">MANAGEMENT</span></h1>
                    <p className="mb-5 border border-b-gray-300 py-1 text-black">All assignments in one place.</p>
                </div>
            </div>
        </div>
    );
};

export default Header;