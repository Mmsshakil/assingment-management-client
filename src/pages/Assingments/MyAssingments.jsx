import { useLoaderData } from "react-router-dom";
import MyAssingmentCard from "./MyAssingmentCard";

const MyAssingments = () => {

    const myAssingments = useLoaderData();


    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Title</th>
                            <th>Total Mark</th>
                            <th>Obtained Mark</th>
                            <th>Feedback</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                    

                        {
                            myAssingments.map(assingment => <MyAssingmentCard
                                key={assingment._id}
                                assingment={assingment}
                            ></MyAssingmentCard>)
                        }

                    
                </table>
            </div>

        </div>
    );
};

export default MyAssingments;