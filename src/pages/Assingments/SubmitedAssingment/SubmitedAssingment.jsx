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

                            <th className="lg:text-xl lg:font-extrabold">Assingment Title</th>
                            <th className="lg:text-xl lg:font-extrabold">Examine Name</th>
                            <th className="lg:text-xl lg:font-extrabold">Total Mark</th>
                            <th className="lg:text-xl lg:font-extrabold"></th>

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