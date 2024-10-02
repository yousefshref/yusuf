import React from 'react'
import { FaFacebook, FaYoutube } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className='p-5 flex flex-col bg-black text-white'>
            <div className='flex gap-3 justify-around items-center'>
                <h1 className='text-xl'>YUSUF</h1>
                <div className='flex gap-2 items-center'>
                    <p>© {new Date().getFullYear()}</p>
                </div>
            </div>
            <div className='mt-5 flex items-center justify-center gap-4'>
                <button className='p-2 bg-blue-500 text-white rounded-sm transition-all duration-500 hover:bg-blue-600'>
                    <FaFacebook size={20} />
                </button>
                <button className='p-2 bg-indigo-500 text-white rounded-sm transition-all duration-500 hover:bg-indigo-600'>
                    <FaInstagram size={20} />
                </button>
                <button className='p-2 bg-red-500 text-white rounded-sm transition-all duration-500 hover:bg-red-600'>
                    <FaYoutube size={20} />
                </button>
            </div>
        </footer>
    )
}

export default Footer
