import { useLoaderData } from "react-router-dom";
import MyAssingmentCard from "./MyAssingmentCard";

const MyAssingments = () => {

    const myAssingments = useLoaderData();


    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr>

                            <th className="lg:text-xl lg:font-extrabold">Assingment Title</th>
                            <th className="lg:text-xl lg:font-extrabold">Total Mark</th>
                            <th className="lg:text-xl lg:font-extrabold">Obtained Mark</th>
                            <th className="lg:text-xl lg:font-extrabold">Feedback</th>
                            <th className="lg:text-xl lg:font-extrabold">Status</th>

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