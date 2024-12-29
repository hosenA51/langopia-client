import Category from "../Category/Category";
import Stats from "../Stats/Stats";
import Banner from "./Banner";

const Home = () => {
    return (
        <div className="bg-base-200">
            <Banner></Banner>
            <Stats></Stats>
            <Category></Category>
        </div>
    );
};

export default Home;