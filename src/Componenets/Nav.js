import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Nav = () => {
    const { user, logout } = useContext(AuthContext)

    const handleLogOut = () => {
        logout()
            .then()
            .catch(error => console.log(error))
    }
    console.log(user)
    return (
        <div>
            <div className="navbar bg-white">
                <div className="flex-1">
                    <img alt='logo' className='w-12 h-12 ' src="https://img.freepik.com/free-vector/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387.jpg?w=740&t=st=1666820539~exp=1666821139~hmac=07676f97694dc99b690ddc89de61b47e32908736fd41138752a20e4463eff629" />
                    <Link className="btn btn-ghost normal-case text-xl">Dev Edu</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to={'/blog'}>Blog</Link></li>
                        <li><Link to={'/faq'}>Faq</Link></li>
                        <li><Link to={'/courses'}>Courses</Link></li>
                        <li><Link to={'/home'}>Home</Link></li>

                    </ul>
                </div>
                {user?.email ? <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt='profile' src={user?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li><Link onClick={handleLogOut}>Logout</Link></li>
                    </ul>
                </div> : <li><Link to={'/login'}>login</Link></li>}
            </div>
        </div>
    );
};

export default Nav;