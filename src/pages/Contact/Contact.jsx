import { Helmet } from 'react-helmet-async';
import 'animate.css'
import './Contact.css';

const Contact = () => {
    return (
        <div>
             <Helmet>
                <title>Contact</title>
            </Helmet>
            <div className=" contactt flex items-center justify-center my-7">
                <p className=' text-6xl text-orange-500 font-bold animate__animated animate__backInDown'>Contact Us</p>
            </div>
            <div className=' grid grid-cols-2'>
                <div className=' grid-cols-1 space-y-5 text-lg my-7'>
                    <p className=' text-2xl font-bold'>Contact Details</p>
                    <p>If you have any questions, just contact us and we will answer you shortly.You can also come to visit our office.</p>
                    <p>
                        <p className=' font-bold'>Contact Number</p>
                        <hr />
                        1-541-452-754
                    </p>
                    <p>
                        <p className=' font-bold'>Email</p>
                        <hr />
                        RHome5732@gmail.com
                    </p>
                    <p>
                        <p className=' font-bold'> Office Location</p>
                        <hr />
                        1065 Sam Ave, Frank Road, New York                     
                    </p>
                </div>
            </div>
        </div>

    );
};

export default Contact;