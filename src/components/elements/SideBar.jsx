import React from 'react'
import RLogo from './../../assets/r_logo.png'
import ThemeToggle from './ThemeToggle';

function SideBar({setTheme, theme}) {
    const text = theme === 'dark' ? "text-white" : "text-black";
  return (
    <>
        <div className='p-4'>
            <div className='rounded-xl shadow-md p-4 min-w-12 w-64 h-full flex flex-col'>
                <div className='border-b-4 mb-4 pb-4 flex'>
                    <img src={RLogo} alt="" className='w-12'/>
                    <p className='font-yesevaone text-violet-500 text-3xl my-auto ps-4' >Resumify</p>
                </div>
                <div className='flex-grow h-full'>
                    <ul className='text-white'>
                        <button className={text} onClick={()=>setTheme("dark")}>
                            Dark
                        </button>
                        <button className={text} onClick={()=>setTheme("light")}>
                            Light
                        </button>
                    </ul>
                </div>
                <div className='flex'>
                    <ThemeToggle setTheme={setTheme} theme={theme} />
                    <label className={`${text} ps-3`}>{theme}</label>
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