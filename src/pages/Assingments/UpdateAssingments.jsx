

import { useContext } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../providers/AuthProvider";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const UpdateAssingments = () => {

    const assingDetails = useLoaderData();
    const { _id, photo, name, mark, descrip, email } = assingDetails;
    // console.log(assingDetails);

    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location);

    const { user } = useContext(AuthContext);
    const [selectDate, setSelectDate] = useState(null);
    const [selectLevel, setSelectLevel] = useState('easy');

    const handleDateChange = (date) => {
        setSelectDate(date);

    };

    const handleLevelChange = (event) => {
        const level = event.target.value;
        setSelectLevel(level);
        console.log('Selected car:', level);
    };



    // handle update all
    const handleUpdateAssing = e => {
        e.preventDefault();

        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;      //title
        const mark = form.mark.value;
        const descrip = form.descrip.value;


        const updateAssingment = { photo, name, mark, descrip, selectLevel, selectDate };
        console.log(updateAssingment);

        const loginEmail = user?.email;
        console.log(loginEmail, email);

        if (loginEmail === email) {

            // send the data to the server
            fetch(`http://localhost:3000/product/${_id}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateAssingment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount > 0) {
                        swal("Success!", "Assingment Updated Successfully", "success");
                        navigate(location?.state ? location.state : '/assingments');
                    }
                    else {
                        swal("Error!", "Please change all data", "error");
                        return;
                    }
                })
        }
        else {
            swal("Error!", "You can't update this Assingment", "error");
            return;
        }

    }


    return (
        <div>

            <div className=" w-full md:w-2/3 lg:w-1/2 mx-auto p-10 border mb-14 ">
                <h2 className="text-xl font-semibold text-center  ">Update Assingment</h2>

                <form onSubmit={handleUpdateAssing}>
                    <div className="flex flex-col gap-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Thumbnail Image URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Enter thumbnail image url" defaultValue={photo} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Assingment Title</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter assingment title" defaultValue={name} className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Assingment Mark</span>
                            </label>
                            <input type="text" name="mark" placeholder="Enter assingment mark" defaultValue={mark} className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Assingment Description</span>
                            </label>
                            <input type="text" name="descrip" placeholder="Enter assingment description" defaultValue={descrip} className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Difficulty Level</span>
                            </label>
                            {/* <input type="text" name="rating" placeholder="Enter product rating" className="input input-bordered" required /> */}

                            <select className="p-2 rounded-lg" id="level" name="level" value={selectLevel} onChange={handleLevelChange}>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium </option>
                                <option value="Hard">Hard</option>
                            </select>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Submission Deadline</span>
                            </label>
                            <DatePicker selected={selectDate} onChange={handleDateChange} minDate={new Date()} required={true}/>

                        </div>

                        <div className="form-control mt-3">
                            <button className="btn btn-primary">Update Assingment</button>
                        </div>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default UpdateAssingments;