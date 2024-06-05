import { useContext } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navbar = () => {
    const {user,logOut}=useContext(AuthContext)

    const handleLogOut=()=>{
        logOut()
        .then()
        .catch(error=>{
            console.log(error);
        })
    }

    const navLink = <>
        <Link to='/rooms'><li>rooms</li></Link>
        <Link to='/myBookings'><li>My Bookings</li></Link>  {/* ony for for authenticated users .next work*/}
        <Link><li>About Us</li></Link>
    </>
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl">Hotel</a>
                </div>
                <div className="navbar-end">
                    <div className="flex gap-5 mr-10">
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                        <input type="checkbox" value="synthwave" className="toggle theme-controller"/>
                        
                        {
                            user?.email?
                            <><button onClick={handleLogOut} className="btn btn-ghost text-white bg-orange-600 px-10">SignOut</button></>
                            :<><Link className="btn" to='/signIn' >SignIn</Link></>
                            
                        }
                        
                    </div>
                    <h3>hello</h3>
                    <button className="btn">
                        Book Now
                    </button>

                </div>
            </div>
        </>
    );
};

export default Navbar;