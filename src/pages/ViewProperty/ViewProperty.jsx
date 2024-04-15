import { useParams, useLoaderData } from 'react-router-dom'
const ViewProperty = () => {
    const { ids } = useParams()
    const houses = useLoaderData()
    const house = houses.find(hs => hs.id == ids)
    const { estate_title, description, price, status, area, location, facilities, image } = house;
    return (
        <div>
            <div className=' grid grid-cols-2 my-8 gap-8'>
                <div className=' col-span-1 w-full'>
                    <img className=' w-full h-96 rounded-md' src={image} alt="" />
                </div>
                <div className=' col-span-1 space-y-2 text-lg'>
                    <p className=' text-2xl font-bold'>{estate_title}</p>
                    <hr />
                    <p>{description}</p>
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