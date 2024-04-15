import { Link } from "react-router-dom";

const House = ({house}) => {
    const {id, estate_title, status, area, location, image   } = house;
    return (
        <div className=" p-4 border">
            <div className="px-6 py-3 rounded-2xl bg-[#1313130D]">
                <img className="w-full h-52 rounded"  src={image} alt="" />
            </div>
            <div className=" space-y-2">
                <p className=" border-2 rounded-lg p-2 w-min bg-slate-100 my-2">For<span className=" p-2 font-bold">{status}</span></p>
                <p className=" text-lg font-bold">{estate_title}</p> 
                <hr />
                <p><span className=" font-bold">Area : </span>{area} Square Feet</p>
                <p><span className=" font-bold my-2"> Location </span>: {location}</p>
            </div>
            <div>
                <Link to={`/house/${id}`}>
                <button className="btn btn-secondary mt-3">View Property</button>
                </Link>
               
            </div>
        </div>
    );
};

export default House;