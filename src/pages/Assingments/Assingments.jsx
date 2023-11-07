import { useLoaderData } from "react-router-dom";
import AssingmentCard from "./AssingmentCard";
import { useState } from "react";

const Assingments = () => {
    const loadAssingment = useLoaderData();
    const [assing, setAssing] = useState(loadAssingment);


    return (
        <div className="">
            <h2>assingments: {loadAssingment.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    loadAssingment.map(assingment => <AssingmentCard
                        key={assingment._id}
                        assingment={assingment}
                        assing={assing}
                        setAssing={setAssing}
                    ></AssingmentCard>)
                }
            </div>
        </div>
    );
};

export default Assingments;