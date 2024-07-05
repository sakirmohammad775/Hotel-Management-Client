import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const SignIn = () => {

    const { signIn,signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')

    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        setError('')

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                navigate('/');
            })
            .catch(error =>
                // Set error message from Firebase
                setError(error.message)
            )
        }
        //signIn with google
        const handleGoogleSignIn=()=>{
            signInWithGoogle()
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error);
        })
        }
       


    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignIn</h1>
                        <p className="py-6">Explore Our page</p>
                    </div>
                    <div className="card  w-full max-w-lg bg-transparent">
                        <form onSubmit={handleSignIn} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="font-bold">Email</span>
                                </label>
                                <input type="email" placeholder="email"
                                    name="email"
                                    className="input input-bordered bg-transparent" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="font-bold">Password</span>
                                </label>
                                <input type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered bg-transparent" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-3">
                                <button type="submit" value="Submit" className="btn  bg-transparent">SignIn</button>
                            </div>
                        </form>
                        {/*if error found*/}
                        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}


                        <p className="text-center">Already have an account? <Link to="/signUp">Sign In</Link></p>

                        {/*another login process*/}
                        <div className="flex my-5 justify-center gap-6">

                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;