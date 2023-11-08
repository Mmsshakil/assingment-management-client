import { useLoaderData } from "react-router-dom";
import Header from "../shared/Header/Header";
import ServiceCard from "./ServiceCard";
import BrandSlider from "../shared/Header/BrandSlider";
import Footer from "../shared/Footer/Footer";
import Questions from "./Questions/Questions";
import Features from "./Features";


const Home = () => {


    return (
        <div>

            <Header></Header>
            <BrandSlider></BrandSlider>

            {/* extra part */}
            <Features></Features>
            <Questions></Questions>
            <Footer></Footer>
        </div>
    );
};

export default Home;