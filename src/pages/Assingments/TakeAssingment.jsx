
const TakeAssingment = () => {
    return (
        <div className="">

            <form className="mx-auto flex flex-col justify-center w-1/2">
                <h1 className="text-center text-3xl font-bold">Submit your PDF link & feedback</h1>
                <div className="flex flex-col gap-3 my-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter PDF link</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter pdf link" className="input input-bordered border-2" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Enter your feedback</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your feedback" className="input input-bordered border-2" required />
                    </div>

                    <div className="form-control mt-3">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default TakeAssingment;