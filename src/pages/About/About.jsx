import './About.css'
const About = () => {
    return (
        <div className=' text-lg'>
            <div className=" grid grid-cols-2 my-8 gap-7">
                <div className=' col-span-1'>
                    <p className=' text-2xl font-bold my-4'> Experience since 2012</p>

                    <p>We have been working since 2012 to be sure you are getting the best MyHome service possible.
                        <br />
                        MyHome aims to unite MyHome brokers to provide their clients and partners with the top-notch level of brokerage services throughout the USA.</p>
                </div>
                <div className=" aboutt flex items-center justify-center my-7">
                    {/* <p className=' text-7xl text-green-800 font-bold'>About Us</p> */}
                </div>
            </div>
            <div className=' grid grid-cols-3 my-8 gap-8'>
<div className=' border-2 rounded p-4 bg-slate-50'>
    <p className='my-3 font-bold'>View Apartment</p>
    <p>View apartment listings with photos, HD videos, virtual tours, 3D floor plans etc.</p>
</div>
<div className=' border-2 rounded p-4 bg-slate-50'>
    <p className='my-3 font-bold'>No Commission</p>
    <p>Opportunity to acquire a quality apartment for rent without having to pay any commission.</p>
</div>
<div className=' border-2 rounded p-4 bg-slate-50'>
    <p className='my-3 font-bold'>Wide Location</p>
    <p>We have lots of properties in various locations available for purchase.</p>
</div>

            </div>
        </div>
    );
};

export default About;