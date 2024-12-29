import Stats from "../Stats/Stats";
import Banner from "./Banner";

const Home = () => {
    return (
        <div className="bg-base-200">
            <Banner></Banner>
            <Stats></Stats>
        </div>
    );
};

export default Home;