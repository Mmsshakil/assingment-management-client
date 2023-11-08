
const Features = () => {
    return (
        <div className="my-14 flex flex-col justify-center items-center text-center ">
            <h1 className="text-center font-bold text-4xl mb-10">Features</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto items-center justify-center gap-4">
                <div className="card w-96 h-64  shadow-xl image-full">
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

export default Features;