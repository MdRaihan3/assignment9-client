import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";
import Houses from "./estates/Houses";

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <Houses></Houses>
        </div>
    );
};

export default Home;