import { Link } from "react-router-dom";
import 'aos/dist/aos.css';


const ServiceCard = ({ service }) => {

   

    const { brand, img, title, details, id, price } = service;
    // console.log(brand);

    return (
        <div  className="card card-compact w-80 bg-base-100 shadow-xl rounded-md mt-5 border-2 ">

            {/* <Link to={`/service/${id}`} className=" font-semibold"> */}

            <Link to={`/products/${brand}`} className=" font-semibold">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className=" text-center text-xl font-bold  my-4">
                <h2 >{title}</h2>
            </div>
            </Link>
        </div>
    );
};

export default ServiceCard;