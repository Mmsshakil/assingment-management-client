import { Link } from "react-router-dom";


const ProductsCard = ({ product }) => {

    const { _id, photo, name, brand, type, price, descrip, rating } = product;

    // console.log(_id);

    return (
        <div className="card w-96 p-5 bg-base-100 shadow-xl rounded-lg">
            <figure className="p-2 flex-grow">
                <img src={photo} alt="Shoes" className="rounded-lg w-full" />
            </figure>
            <div className="flex flex-col items-center gap-3 justify-center">
                <div className="">
                    <h2 className="text-lg  ">Name: {name}</h2>
                    <h2 className="text-lg  ">Brand: {brand}</h2>
                    <h2 className="text-lg  ">Type: {type}</h2>
                    <h2 className="text-lg  ">Price: ${price}</h2>
                    <h2 className="text-lg  ">Rating: {rating}  <span className="text-base font-light text-gray-600">out of 10</span></h2>
                </div>

                <div className="  card-actions gap-10">

                    <Link to={`/productDetails/${_id}`}>
                    <button className="btn btn-outline btn-info">Details</button>
                    </Link>

                    <Link to={`/updateProducts/${_id}`}>
                        <button className="btn btn-outline btn-warning">Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;