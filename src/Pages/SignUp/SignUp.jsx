import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle } from "react-icons/fa";


const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()

    // const backgroundImageStyle = {
    //     backgroundImage: `url(${signUpImage})`,
    //     backgroundSize: 'cover', // Cover the entire div
    //     backgroundPosition: 'center', // Center the image
    //     backgroundRepeat: 'no-repeat', // Do not repeat the image
    // };

    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password);

        //authentication from authContext
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user); //for testing
                navigate('/')
            })
            .catch(error => console.log(error))
    }
    return (
        <>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp</h1>
                        <p className="py-6">Explore Our page</p>
                    </div>
                    <div className="card  w-full max-w-lg bg-transparent">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control w-96">
                                <label className="label">
                                    <span className="font-bold">Name</span>
                                </label>
                                <input type="name" placeholder="name" name="name" className="input input-bordered bg-transparent  " required />
                            </div>
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
                                <button type="submit" className="btn  bg-transparent">SignUp</button>
                            </div>
                        </form>
                        {/*if error found*/}


                        <p className="text-center">Already have an account? <Link to="/signIn">Sign In</Link></p>

                        {/*another login process*/}
                        <div className="flex my-5 justify-center gap-6">

                            <button className="pt-2"><FaGoogle /></button>
                            <button className="pt-2"><FaFacebook /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;