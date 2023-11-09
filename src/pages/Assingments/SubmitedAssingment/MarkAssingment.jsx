import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const MarkAssingment = () => {

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const submitAllAssingment = useLoaderData();
    const { _id, pdf, name, feedback } = submitAllAssingment;

    const handleConfirm = (e) => {
        e.preventDefault();



        const form = e.target;
        const finalMark = form.mark.value;
        const finalFeedback = form.feedback.value;
        const status = "confirm";

        const finalSubmit = { finalMark, finalFeedback, status }
        console.log(finalSubmit);



        fetch(`https://assingment-manage-server.vercel.app/submitedAssingment/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(finalSubmit)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    swal("Success!", "Assingment marked Successfully", "success");
                    navigate(location?.state ? location.state : '/submitedAssingment');
                }
            })
    }

    return (
        <div className="">
            <div className=" border max-w-5xl mx-auto text-center flex flex-col justify-center items-center gap-5 py-10">
                <h1 className="text-lg">Assingment title - {name}</h1>
                <h1 className="text-lg">PDF link - <span className="text-blue-600 text-base">{pdf}</span></h1>
                <p>Examinee Note - {feedback}</p>
                <form onSubmit={handleConfirm} className="flex flex-col w-1/2 gap-3">
                    <input className="p-2 text-lg rounded-lg" type="text" name="mark" placeholder="Enter the mark" required />
                    <input className="p-2 text-lg rounded-lg" type="text" name="feedback" placeholder="Enter your feedback" required />
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>

        </div>
    );
};

export default MarkAssingment;