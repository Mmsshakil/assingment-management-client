import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AssingmentCard = ({ assingment, assing, setAssing }) => {

    const { _id, photo, name, mark, descrip, selectLevel, selectDate } = assingment;


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


                fetch(`http://localhost:3000/assingments/${_id}`, {
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
                            const remaining = assing.filter(car => car._id !== _id);
                            setAssing(remaining);
                        }
                    })
            }
        })

    }



    return (
        <div className="mx-auto">
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure className=""><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Title: {name}</h2>
                    <div className="flex">
                        <p> Mark: {mark}</p>
                        <p>Level: {selectLevel}</p>
                    </div>
                    <div className="card-actions justify-center">
                        <Link to={`/assingmentDetails/${_id}`}>
                            <button className="btn btn-outline btn-info">Details</button>
                        </Link>
                        <Link to={`/updateAssingments/${_id}`}>
                            <button className="btn btn-outline btn-warning">Update</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn btn-outline btn-error">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssingmentCard;