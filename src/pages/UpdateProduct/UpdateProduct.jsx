import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const UpdateProduct = () => {

    const product = useLoaderData();
    const { _id, photo, name, brand, type, price, descrip, rating } = product;
    console.log(_id);


    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);


    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const descrip = form.descrip.value;
        const rating = form.rating.value;

        if (rating > 10) {
            swal("Error!", "Rating must be less than 10", "error");
            return;
        }

        const updatedProduct = { photo, name, brand, type, price, descrip, rating };
        console.log(updatedProduct);

        // send the data to the server
        fetch(`http://localhost:3000/product/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    swal("Success!", "Product Updated Successfully", "success");
                    navigate(location?.state ? location.state : '/');
                }
                else {
                    swal("Error!", "Please change any data", "error");
                }
            })


    }




    return (
        <div>
            <h2 className="text-center my-4 text-xl font-bold text-green-500">Product Name: {name}</h2>

            <div className=" w-full md:w-2/3 lg:w-1/2 mx-auto p-10 border mb-14 ">
                <h2 className="text-xl font-semibold text-center  ">Update Product</h2>

                <form onSubmit={handleUpdateProduct}>
                    <div className="flex flex-col gap-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Enter product image url" defaultValue={photo} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter product name" defaultValue={name} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>


                            <input type="text" name="brand" placeholder="Enter brand name" defaultValue={brand} className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Type</span>
                            </label>
                            <input type="text" name="type" placeholder="Enter product type" defaultValue={type} className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Price</span>
                            </label>
                            <input type="text" name="price" placeholder="Enter product price" defaultValue={price} className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Short description</span>
                            </label>
                            <input type="text" name="descrip" placeholder="Enter short description" defaultValue={descrip} className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Rating out of 10</span>
                            </label>
                            <input type="text" name="rating" placeholder="Enter product rating" defaultValue={rating} className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default UpdateProduct;