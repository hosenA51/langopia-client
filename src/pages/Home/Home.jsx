import Category from "../Category/Category";
import HowItWorks from "../HowItWorks/HowItWorks";
import Stats from "../Stats/Stats";
import Testimonials from "../Testimonials/Testimonials";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Banner from "./Banner";

const Home = () => {
    return (
        <div className="bg-base-200">
            <Banner></Banner>
            <Stats></Stats>
            <Category></Category>
            <WhyChooseUs></WhyChooseUs>
            <HowItWorks></HowItWorks>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;