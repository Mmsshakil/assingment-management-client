import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import swal from 'sweetalert';


const ProductDetails = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const product = useLoaderData();
    const {photo, name, brand, type, price, descrip, rating } = product;

    

    const handleAddToCart = () => {

        const cartPhoto = photo;
        const cartName = name;
        const cartBrand = brand;
        const cartType = type;
        const cartPrice = price;
        const cartDescrip = descrip;
    
        const newCart = { cartPhoto, cartName, cartBrand, cartType, cartPrice, cartDescrip };



        console.log(newCart);

        // sent cart data to the server
        fetch('https://assingment-manage-server.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId){
                    swal("Success!", "Add to Cart successful!", "success");
                    navigate(location?.state ? location.state : '/cart');

                }
                else{
                    swal("Error", "Already Added!", "warning");
                    navigate(location?.state ? location.state : '/products');
                    return;
                }

            })



    }

    return (
        <div className="flex flex-col md:flex-row justify-center items-center my-5 gap-5 m-8">
            <img className="w-1/2 md:w-1/3"  src={photo} alt="" />
            <div className="">
                <div className=" flex flex-col gap-2">
                    <div>
                        <h2><span className="text-emerald-600">Name:</span> {name}</h2>
                    </div>
                    <div>
                        <h2><span className="text-emerald-600">Brand:</span> {brand}</h2>
                    </div>
                    <div>
                        <h2><span className="text-emerald-600">Type:</span> {type}</h2>
                    </div>
                    <div>
                        <h2><span className="text-emerald-600">Descriptions:</span> {descrip}</h2>
                    </div>
                    <div>
                        <h2><span className="text-emerald-600">Price:</span> ${price}</h2>
                    </div>

                </div>
                <Link  className="">
                    <button onClick={handleAddToCart} className="btn btn-outline btn-accent mt-4">Add to Cart</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetails;