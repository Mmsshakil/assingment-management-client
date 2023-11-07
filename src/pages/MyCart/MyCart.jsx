import { useLoaderData } from "react-router-dom";
import CartCard from "./CartCard";
import { useState } from "react";

const MyCart = () => {

    const loadedCarts = useLoaderData();
    const [carts, setCarts] = useState(loadedCarts);

    return (
        <div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-20 ">
                {
                    carts.map(cart => <CartCard
                        cart={cart}
                        key={cart._id}
                        carts={carts}
                        setCarts={setCarts}
                    ></CartCard>)
                }
            </div>

        </div>
    );
};

export default MyCart;