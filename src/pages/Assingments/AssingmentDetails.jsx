import { Link, useLoaderData } from "react-router-dom";

const AssingmentDetails = () => {

    const assingDetails = useLoaderData();
    const {_id, photo, name, mark, descrip, selectLevel, selectDate } = assingDetails;
    console.log(name);

    return (
        <div className="flex justify-center items-center mx-auto">
            <div className="space-y-3">
                <img className="w-96" src={photo} alt="" />
                <p className="text-2xl">Title: {name}</p>
                <p>Description: {descrip}</p>
                <p className="text-lg">Mark: {mark}</p>
                <div className="flex flex-row gap-5">
                    <p>Level: {selectLevel}</p>
                    <p>Date: {selectDate}</p>
                </div>

                <Link to={`/takeAssingment/${_id}`}><button className="btn btn-primary">Take assignment</button></Link>
            </div>
        </div>
    );
};

export default AssingmentDetails;