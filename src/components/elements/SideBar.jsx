import React from 'react'
import RLogo from './../../assets/r_logo.png'

function SideBar() {
  return (
    <>
        <div className='p-4'>
            <div className='rounded-xl bg-violet-400 shadow-md p-4 min-w-12 h-full flex flex-col'>
                <div className='border-b-4 mb-4 '>
                    <img src={RLogo} alt="" className='scale-75'/>
                </div>
                <div className='flex-grow h-full'>
                    <ul className=''>
                        <li>
                            hey
                        </li>
                    </ul>
                </div>
                <div className='bg-gray-700 h-52 flex justify-center align-center'>
                    <p>Ad</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default SideBar