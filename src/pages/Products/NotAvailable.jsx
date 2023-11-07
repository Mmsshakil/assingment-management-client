import { Link } from "react-router-dom";

const NotAvailable = () => {
    console.log('not available');
    return (
        <div className="mt-20 border p-10">
            <h1 className=" text-red-500 text-xl mb-5">Product is not available </h1>
            <Link to='/addProduct'><button className="btn btn-outline btn-success">Add Product</button></Link>
        </div>
    );
};

export default NotAvailable;