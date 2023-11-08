import { useContext } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import swal from 'sweetalert';
import { AuthContext } from "../../providers/AuthProvider";

const AddProduct = () => {

    const {user} = useContext(AuthContext);

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



    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const photo = form.photo.value;
        const name = form.name.value;      //title
        // const brand = form.brand.value;
        // const type = form.type.value;
        const mark = form.mark.value;
        const descrip = form.descrip.value;
        const email = user?.email;
        // const rating = form.rating.value; //defautly level

        // if (rating > 10) {
        //     swal("Error!", "Rating must be less than 10", "error");
        //     return;
        // }

        // const newProduct = { photo, name, brand, type, price, descrip, rating };
        const newProduct = { photo, email, name, mark, descrip, selectLevel , selectDate };
        console.log(newProduct);

        // send the data to the server
        fetch('https://assingment-manage-server.vercel.app/product', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    swal("Success!", "New Product Added", "success");
                }
            })


    }

    return (
        <div>

            <div className=" w-full md:w-2/3 lg:w-1/2 mx-auto p-10 border mb-14 ">
                <h2 className="text-xl font-semibold text-center  ">Add New Assingment</h2>

                <form onSubmit={handleAddProduct}>
                    <div className="flex flex-col gap-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Thumbnail Image URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Enter product image url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Assingment Title</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter Assingment Title" className="input input-bordered" required />
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Assingment Mark</span>
                            </label>
                            <input type="text" name="mark" placeholder="Enter Total Mark" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Assingment Description</span>
                            </label>
                            <input type="text" name="descrip" placeholder="Enter short description" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Defecaulty Level</span>
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
                            <button className="btn btn-primary">Add Product</button>
                        </div>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default AddProduct;