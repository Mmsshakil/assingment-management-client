
const Questions = () => {
    return (
        <div className="w-2/3 mx-auto my-5 space-y-3">
            <h1 className="text-center font-bold text-xl md:text-4xl mb-7 mt-16">Frequently Asked Questions</h1>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    Can I login with email-pass or Google?
                </div>
                <div className="collapse-content">
                    <p>Yes, every student can login with their gmail or email pass. If you don not have account, you can also register here.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Can I add any assingment for all users?
                </div>
                <div className="collapse-content">
                    <p>Yes, if logged in then you can add any assingment.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    I want to mark my assingment. How can I do that?
                </div>
                <div className="collapse-content">
                    <p>No, you can not mark your assingment. But you can mark other students assingment. You can also give mark and feedback to this student.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Is this free to use, or do I need to pay for the website?
                </div>
                <div className="collapse-content">
                    <p>This website is totally free to use.</p>
                </div>
            </div>

        </div>
    );
};

export default Questions;