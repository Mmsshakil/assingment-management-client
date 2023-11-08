import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";
import { useLoaderData } from "react-router-dom";

const TakeAssingment = () => {

    const assingDetails = useLoaderData();
    const { _id, photo, name, mark, descrip, email } = assingDetails;
    // console.log(name);

    const { user } = useContext(AuthContext);
    console.log(user);

    const handleTakeAssingment = e => {
        e.preventDefault();
        const form = e.target;
        const pdf = form.pdf.value;
        const feedback = form.feedback.value;
        const loginEmail = user?.email;
        const loginName = user?.displayName;

        const takeAssingment = { pdf, feedback, loginEmail,loginName, name, mark, photo };
        console.log(takeAssingment);

        fetch('http://localhost:3000/submited', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(takeAssingment)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    swal("Success!", "Assingment Submited", "success");
                }
            })


    }



    return (
        <div className="">

            <form onSubmit={handleTakeAssingment} className="mx-auto flex flex-col justify-center w-1/2">
                <h1 className="text-center text-3xl font-bold">Title: {name}</h1>
                <h1 className="text-center text-xl ">Submit your PDF link & feedback</h1>
                <hr />
                <div className="flex flex-col gap-3 my-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter PDF link</span>
                        </label>
                        <input type="text" name="pdf" placeholder="Enter pdf link" className="input input-bordered border-2" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter your feedback</span>
                        </label>
                        <input type="text" name="feedback" placeholder="Enter your feedback" className="input input-bordered border-2" required />
                    </div>

                    <div className="form-control mt-3">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default TakeAssingment;