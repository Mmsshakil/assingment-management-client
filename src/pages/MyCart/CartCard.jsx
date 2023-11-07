import Swal from "sweetalert2";

const CartCard = ({ cart, setCarts, carts }) => {

    const { _id, cartPhoto, cartName, cartBrand, cartType, cartPrice, cartDescrip } = cart;

    const handleDelete = _id => {
        console.log(_id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:3000/cart/${_id}`, {
                    method: 'DELETE'

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = carts.filter(car => car._id !== _id);
                            setCarts(remaining);
                        }
                    })
            }
        })

    }

    return (
        <div className="flex gap-2 md:gap-10 lg:gap-14 justify-center m-1 border p-3">
            <figure><img className="w-60" src={cartPhoto} alt="Movie" /></figure>
            <div className=" flex flex-col justify-center items-center gap-2">
                <h2>Name: {cartName}</h2>
                <p>Brand: {cartBrand}</p>
                <p>Type: {cartType}</p>
                <p>Price: {cartPrice}</p>
                <div className="">
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-outline btn-error">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;