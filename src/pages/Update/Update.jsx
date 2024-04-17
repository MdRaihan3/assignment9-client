import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import 'animate.css';

const Update = () => {
    const {updateUserProfile} = useContext(AuthContext)
    const handleUpdate = (e) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo')
        console.log(name, photo)
        updateUserProfile(name, photo)
        .then(()=>{   
            toast('profile updated')
        })
        .catch(error =>{
            console.error(error)
        });

    }
    return (
        <div>
             <Helmet>
                <title >Update Profile</title>
            </Helmet>
        <div className="hero  bg-base-200 my-10">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold  animate__animated animate__backInDown">Update Your Profile</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    {/* forrrrrrrrrrrrrrrrrrrrrrrrrm */}
                    <form onSubmit={handleUpdate} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Change Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="input input-bordered" name="name"  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Change Photo Url</span>
                            </label>
                            
                            <input type='text' placeholder="Photo Url" className="input input-bordered" name="photo" required />   
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Save Changes</button>
                            <ToastContainer></ToastContainer>
                        </div>
                    </form>

                </div>
               
              
            </div>

        </div>

    </div>
    );
};

export default Update;