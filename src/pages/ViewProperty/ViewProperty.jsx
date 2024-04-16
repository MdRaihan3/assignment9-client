import { useParams, useLoaderData } from 'react-router-dom';
import './ViewProperty.css';
import 'animate.css'
import { Helmet } from 'react-helmet-async';
const ViewProperty = () => {
    const { ids } = useParams()
    const houses = useLoaderData()
    const house = houses.find(hs => hs.id == ids)
    const { estate_title, description, price, status, area, location,segment_name, facilities, image } = house;
    return (
        <div>
            <Helmet>
                <title>Estate Details</title>
            </Helmet>
            <div className=" w-full bannerrr text-center flex flex-col items-center justify-center text-white my-6">
                <p className=' text-4xl font-bold my-5 animate__animated animate__backInDown'>
                    Estate Details
                </p>
            </div>
            <div className=' md:grid grid-cols-2 my-8 gap-8'>
                <div className=' col-span-1 w-full'>
                    <img className=' w-full h-96 rounded-md' src={image} alt="" />
                </div>
                <div className=' col-span-1 space-y-2 text-lg'>
                    <p className=' text-2xl font-bold'>{estate_title}</p>
                    <hr />
                    <p>{description}</p>
                    <p><span className=" font-bold">Type : </span>{segment_name}</p>
                    <p><span className=" font-bold">Area : </span>{area} Square Feet</p>
                    <p><span className=" font-bold my-2"> Location : </span> {location}</p>
                    <p className=' '> <span className=' font-bold'>Facilities : </span>
                        {facilities[0]},
                        {facilities[1]},
                        {facilities[2]}
                    </p>
                    <hr />
                    <div className=' flex gap-6 items-center'>
                        <p className=" border-2 rounded-lg p-2 w-min bg-slate-100 my-2">For<span className=" p-2 font-bold">{status}</span></p>
                        <p><span className=' font-bold'> Price: </span>${price}
                            {
                                status === 'rent' ? '/month' : ''
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProperty;