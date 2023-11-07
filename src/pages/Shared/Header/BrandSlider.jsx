import Marquee from "react-fast-marquee";


const BrandSlider = () => {
    return (
        <div className="mt-2 mb-3">
            <Marquee pauseOnHover={true} speed={100}>
                ( The Best Brand has the Best Products.... )  Our Brands:  Google Smanusng Sony Apple Intel Huawei. We provide best quality product and best services.   
            </Marquee>
            
        </div>
    );
};

export default BrandSlider;