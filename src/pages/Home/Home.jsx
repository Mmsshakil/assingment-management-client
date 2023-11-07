import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import ServiceCard from "./ServiceCard";
import BrandSlider from "../shared/Header/BrandSlider";
import Footer from "../shared/Footer/Footer";
import Questions from "./Questions/Questions";
import Features from "./Features";


const Home = () => {

    const service = useLoaderData();
    // console.log(service);

    return (
        <div>

            <Header></Header>
            <BrandSlider></BrandSlider>


            {/* brands */}
            <div className=" flex flex-col items-center">
                <h2 className="text-2xl font-bold font-nunito text-center my-5">Our Brands</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {
                        service?.map(aService => <ServiceCard key={aService.id} service={aService}></ServiceCard>)
                    }
                </div>
            </div>

            {/* extra part */}
            <Features></Features>
            <Questions></Questions>
            <Footer></Footer>
        </div>
    );
};

export default Home;