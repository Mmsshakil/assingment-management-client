import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";
import Advertise from "../Advertise/Advertise";
import swal from "sweetalert";
import NotAvailable from "./NotAvailable";


const Products = () => {

    console.log(location);

    const products = useLoaderData();
    console.log(products);


    if (products.length <= 0) {
        // console.log('not available');
        // swal("Product isn't available!", "Please add product of this brand", "error");

    }

    return (
        <div className="flex flex-col justify-center items-center">

            <h1 className="text-orange-700">advertising</h1>

            <Advertise></Advertise>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    // products.map(product => <ProductsCard
                    //     key={product._id}
                    //     product={product}
                    // ></ProductsCard>)


                    !products || products.length === 0 ? (
                        <NotAvailable></NotAvailable>
                    ) : (
                        products.map((product) => (
                            <ProductsCard key={product._id} product={product}></ProductsCard>
                        ))
                    )
                }
            </div>
        </div>
    );
};

export default Products;