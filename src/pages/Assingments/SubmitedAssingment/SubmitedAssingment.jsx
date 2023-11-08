import { useLoaderData } from "react-router-dom";
import SubmitedAssingCard from "./SubmitedAssingCard";

const SubmitedAssingment = () => {

    const submitedAssingments = useLoaderData();
    //   console.log();

    return (
        <div>
            <h2>thi is submited assingment: {submitedAssingments.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Assingment Title</th>
                            <th>Examine Name</th>
                            <th>Total Mark</th>
                            <th></th>

                        </tr>
                    </thead>

                    {
                        submitedAssingments.map(assing => <SubmitedAssingCard
                            key={assing._id}
                            assing={assing}
                        ></SubmitedAssingCard>)
                    }
                </table>
            </div>


        </div>
    );
};

export default SubmitedAssingment;