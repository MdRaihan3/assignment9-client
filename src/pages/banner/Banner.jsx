import { FcPrevious, FcNext } from "react-icons/fc";
import Banner1 from "./Banner1";
import Banner2 from "./banner2/Banner2";
import Banner3 from "./baneer3/Banner3";
import Banner4 from "./banner4/Banner4";

const Banner = () => {
    return (
        <div>
            <div className=' my-20'>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className=" w-full"> <Banner1></Banner1></div>
                      
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle"><FcPrevious></FcPrevious></a>
                            <a href="#slide2" className="btn btn-circle"><FcNext></FcNext></a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                       <Banner2></Banner2>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle"><FcPrevious></FcPrevious></a>
                            <a href="#slide3" className="btn btn-circle"><FcNext></FcNext></a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                      <Banner3></Banner3>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle"><FcPrevious></FcPrevious></a>
                            <a href="#slide4" className="btn btn-circle"><FcNext></FcNext></a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                       <Banner4></Banner4>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle"><FcPrevious></FcPrevious></a>
                            <a href="#slide1" className="btn btn-circle"><FcNext></FcNext></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;