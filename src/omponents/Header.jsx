import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import { signOut } from 'firebase/auth';

const Header = () => {
      const { user, logOut } = useContext(AuthContext)
      const handleLogOut = () => {
            logOut()
                  .then(() => { })
                  .catch(error => { console.log(error); })
      }

      return (
            <div>

                  <div className="navbar bg-primary text-primary-content">
                        <a className=''>UI Master</a>
                        <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                        {
                              user &&
                              <Link className="btn btn-ghost normal-case text-xl" to='/orders'>Orders</Link>


                        }
                        {
                              user && <Link className="btn btn-ghost normal-case text-xl" to='/profile'>Profile</Link>
                        }
                        <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
                        <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                        <p> {
                              user ? <div>{user.email} <button className='btn btn-xs' onClick={handleLogOut}>signOut</button></div> : <Link to='/login'>Login</Link>
                        }</p>
                  </div>
            </div>
      );
};

export default Header;