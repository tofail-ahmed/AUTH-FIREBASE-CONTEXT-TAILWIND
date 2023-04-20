import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Register = () => {

      const { user, createUser } = useContext(AuthContext)
      // console.log(createUser);
      const handleRegister = event => {
            event.preventDefault()
            const form = event.target
            const name = form.name.value
            const email = form.email.value
            const password = form.password.value
            console.log(name, email, password);
            createUser(email, password)
                  .then((result) => {
                        const loggedUser = result.user
                        console.log(loggedUser);
                        form.reset()
                  })
                  .catch(error=>{
                        console.log(error);
                  })

      }
      return (
            <div>
                  <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col ">
                              <div className="text-center ">
                                    <h1 className="text-5xl font-bold">Get Registered now!</h1>
                                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                              </div>
                              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <form onSubmit={handleRegister} className="card-body">
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Name</span>
                                                </label>
                                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Email</span>
                                                </label>
                                                <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                                          </div>
                                          <div className="form-control">
                                                <label className="label">
                                                      <span className="label-text">Password</span>
                                                </label>
                                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                          </div>
                                          <div className="form-control mt-6">
                                                <button className="btn btn-primary">Register</button>
                                          </div>
                                    </form>
                                    <Link to='/login'><button className="btn btn-link">Already Registered?</button></Link>
                              </div>
                        </div>
                  </div>

            </div>
      );
};

export default Register;