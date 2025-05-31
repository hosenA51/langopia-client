import { useRef } from "react";
import Category from "../Category/Category";
import HowItWorks from "../HowItWorks/HowItWorks";
import Stats from "../Stats/Stats";
import Testimonials from "../Testimonials/Testimonials";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Banner from "./Banner";
import LanguageGoals from "../LanguageGoals/LanguageGoals";
import BlogHighlights from "../BlogHighlights/BlogHighlights";

const Home = () => {
    const categoryRef = useRef(null);

  const handleScrollToCategory = () => {
    categoryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
    return (
        <div className="bg-base-200">
            <Banner onGetStarted={handleScrollToCategory}></Banner>
            <Stats></Stats>
            <div ref={categoryRef}>
            <Category ></Category>
            </div>
            <WhyChooseUs></WhyChooseUs>
            <HowItWorks></HowItWorks>
            <LanguageGoals></LanguageGoals>
            <BlogHighlights></BlogHighlights>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;