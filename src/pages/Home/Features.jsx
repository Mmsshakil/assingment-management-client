
import * as React from "react";
import { render } from "react-dom";
import { motion } from "framer-motion";


const Features = () => {

    const [rotate, setRotate] = React.useState(false);


    return (
        <div className="my-14 flex flex-col justify-center items-center text-center ">
            <h1 className="text-center font-bold text-4xl mb-10">Features</h1>
            {/* <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} /> */}
            {/* <motion.div animate={{y: 100}} > </motion.div> */}
            <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto items-center justify-center gap-4">

                <div className="card w-96 h-64  shadow-xl image-full">

                    <motion.div 
                    animate={{ rotate: rotate ? 360 : 0 }}
                    onClick={() => {setRotate(!rotate)}}

                    // whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}

                    ></motion.div>

                    <figure><img src="https://i.ibb.co/N23BQZ1/bacnah-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className="text-white text-lg font-bold">This website offers Google and email authentication for assignment management. Users must log in or register to add, update, or delete assignments.</p>

                    </div>
                </div>
                <div className="card w-96 h-64 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/N23BQZ1/bacnah-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className="text-white text-lg font-bold">Logged-in students can create, update, and delete their own assignments. However, they can not modify or delete assignments created by other students, ensuring data integrity and individual control.</p>

                    </div>
                </div>
                <div className="card w-96 h-64 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/N23BQZ1/bacnah-1.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <p className="text-white text-lg font-bold">The website adapts seamlessly to mobile, tablet, and laptop screens, prioritizing student data security while ensuring all features function smoothly for an excellent user experience.</p>

                    </div>
                </div>
            </div>

        </div>
    );
};

render(<Features />, document.getElementById("root"));

export default Features;