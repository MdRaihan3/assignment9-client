import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const UserProfile = () => {
    const {user} = useContext(AuthContext)
    const {displayName, email, photoURL} = user;
    return (
        <div className=" mx-auto w-fit border-2 p-6 rounded-lg text-lg my-10 bg-slate-50">
             <Helmet>
                <title>User Profile</title>
            </Helmet>
            <p className="flex justify-center text-xl font-bold">Profile</p> <hr />
            <div className=" w-16 mt-5">
                <img className=" rounded-full" src={photoURL} alt="" />
            </div>
            <p><span className=" font-bold">User Name : </span>{displayName}</p>
            <p><span className=" font-bold">Email : </span>{email}</p>
        </div>
    );
};

export default UserProfile;