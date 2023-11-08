import Marquee from "react-fast-marquee";


const BrandSlider = () => {
    return (
        <div className="mt-2 mb-3">
            <Marquee pauseOnHover={true} speed={100}>
                Having all assignments in one place simplifies academic life, streamlines time management, reduces stress, and enhances overall productivity and success.
            </Marquee>

        </div>
    );
};

export default BrandSlider;