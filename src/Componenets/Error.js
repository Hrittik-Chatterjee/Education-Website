import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className=' bg-black w-screen h-screen flex justify-center'>
            <div>
                <img className='w-100' src="https://media.istockphoto.com/photos/computer-error-picture-id1222806141?k=20&m=1222806141&s=612x612&w=0&h=GoODCHnR0mSefDBLWJpnqVnfRKH9ttdYPO0-KEYbb7w=" alt="" />

                <div className='flex justify-center'>

                    <div>
                    <h1 className='text-2xl font-bold text-red-900'>You Have entered the wrong keywords</h1>
                    <p className='mt-12 text-sm'>Click the button bellow to go back to homepage</p>
                    <Link to={'/home'}><button className='bg-[#ef4444] px-6 py-2 rounded mt-3 text-white'>Homepage</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;