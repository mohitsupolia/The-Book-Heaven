import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logout} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogout = () => {
        logout()
        .then(() => {
            // Sign-out successfull...
            alert("Log Out Successfully!!!");
            navigate(from, {replace: true})
        })
        .catch((error) => {
            // an error occurred...
        })
    }


  return (
    <div className='h-screen bg-cyan-300 flex items-center justify-center'>
        <button className='bg-red-700 px-8 py-2 text-white rounded' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
