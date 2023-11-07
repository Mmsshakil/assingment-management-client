
import Navbar from "../shared/Navbar/Navbar";

const Error = () => {
    return (
        <div className="conatainer mx-auto max-w-7xl font-nunito">
            <Navbar></Navbar>
            <div className=" text-center my-[20vh]">
                    <h2 className="text-9xl font-bold  ">404</h2>
                    <p className="text-3xl"><span className="text-lime-600">Opps!</span> page not found</p>
            </div>
            
        </div>
    );
};

export default Error;