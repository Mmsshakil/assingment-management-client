import { useLoaderData } from "react-router-dom";
import AssingmentCard from "./AssingmentCard";
import { useState } from "react";
// import { useEffect } from "react";

const Assingments = () => {
    // const loadAssingment = useLoaderData(currentPage, itemsPerpage);


    // -------------test-------------------------
    // const [itemsPerpage, setItemsPerPage] = useState(2);
    // const [currentPage, setCurrentPage] = useState(0);
    
    // const [loadAssingment, setloadAssingment] = useState();
    
    // useEffect(() => {
    //     fetch(`https://assingment-manage-server.vercel.app/assingments?page=${currentPage}&size=${itemsPerpage}`)
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data);
    //         setloadAssingment(data);
    //     })


    // }, [currentPage, itemsPerpage])


    // ------------------------------------------

    // ----------pagination------------
    const [itemsPerpage, setItemsPerPage] = useState(2);
    const [currentPage, setCurrentPage] = useState(0);
    const loadAssingment = useLoaderData(currentPage, itemsPerpage);
    const count = loadAssingment.length;
    // console.log(count);

    const numberOfPages = Math.ceil(count / itemsPerpage);

    // const pages = [];
    // for (let i = 0; i < numberOfPages; i++) {
    //     pages.push(i);
    // }

    const pages = [...Array(numberOfPages).keys()];
    // console.log(pages);

    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        console.log(val);
        setItemsPerPage(val);
        setCurrentPage(0);
    }

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }


    // ------------------------------

    const [assing, setAssing] = useState(loadAssingment);


    return (
        <div className="">
            {/* <h2>assingments: {loadAssingment.length}</h2> */}
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
            <div className="text-center my-8 space-x-5">
                <p>Current page: {currentPage}</p>
                <button onClick={handlePrev} className="btn btn-outline">Prev</button>
                {
                    pages?.map(page => <button
                        className={
                            currentPage === page ? `btn btn-info` : `btn`
                        }
                        onClick={() => setCurrentPage(page)}
                        key={page}

                    >{page}</button>)
                }
                <button onClick={handleNext} className="btn btn-outline">Next</button>
                <select value={itemsPerpage} onChange={handleItemsPerPage} name="" id="">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                </select>
            </div>
        </div>
    );
};

export default Assingments;