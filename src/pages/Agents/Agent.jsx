
const Agent = ({agent}) => {
    const {name, contact_number, image} = agent;
    return (
        <div className=" col-span-1 grid grid-cols-2 p-3 border rounded-md">
            <div className=" col-span-1 p-2">
                <img className=" h-40 w-48 rounded-lg" src={image} alt="" />
            </div>
            <div className=" space-y-3 p-2">
                <p className=" text-xl font-bold">{name}</p>
                <p>Residential Real Estate Broker</p>
                <hr />
                <p><span className=" text-lg font-bold">Contact No : </span>{contact_number}</p>
            </div>
        </div>
    );
};

export default Agent;