import { useLoaderData } from "react-router-dom";
import MyAssingmentCard from "./MyAssingmentCard";

const MyAssingments = () => {

    const myAssingments = useLoaderData();


    return (
        <div>
            <h3>my assingments page: {myAssingments.length}</h3>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            
                            <th>Title</th>
                            <th>Mark</th>
                            <th>Obtained Mark</th>
                            <th>Feedback</th>
                            <th>Status</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myAssingments.map(assingment => <MyAssingmentCard
                                key={assingment._id}
                                assingment={assingment}
                            ></MyAssingmentCard>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyAssingments;