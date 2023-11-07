import { useLoaderData, useParams } from "react-router-dom";



const Service = () => {

    const { id } = useParams();
    const Details = useLoaderData();
    console.log(Details);





    // console.log(id);
    // const job = Details.find(job => job.id === idInt)
    const detailService = Details?.find(detailService => detailService?.id === id)
    // console.log(detailService);
    // console.log(job)

    return (
        <div>
           
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-6">
                <div className="col-span-1 mt-0  rounded-md ">

                    {/* <LeftSideNav></LeftSideNav> */}
                </div>

                <div className="md:col-span-3 lg:col-span-3  mx-auto w-3/4 mt-0 ">

                    <div>
                        <img src={detailService?.img} alt="" />
                    </div>
                    <div className="text-xl font-bold my-3  ">
                        {detailService?.title}
                    </div>
                    <div>
                        {detailService?.details}
                    </div>
                    <div className="my-3 font-bold text-lg  ">
                        <h2>Price: ${detailService.price}</h2>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Service;