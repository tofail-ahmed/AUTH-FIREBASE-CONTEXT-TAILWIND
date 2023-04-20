import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
      // const [user] = useContext(AuthContext)
      return (
            <div>
                  <p className='text-4xl'>This is home</p>
                  {/* <h2>This is Home{user && <p>{user.displayName}</p>}</h2> */}
            </div>
      );
};

export default Home;
