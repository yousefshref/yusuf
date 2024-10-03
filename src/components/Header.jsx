import React from 'react'

import { IoPlayCircleOutline } from 'react-icons/io5'

const Header = () => {
    return (
        <header className='p-5'>
            <nav className='flex sm:flex-row flex-col sm:gap-10 gap-5 justify-center items-center'>
                <h1 className='text-2xl font-medium'>YUSUF</h1>
                <ul className='flex gap-10'>
                    {/* <li>About</li>
                    <li>Services</li>
                    <li>Contanct</li> */}
                    <li className='text-red-500'>STILL UNDER DEVELOPMENT</li>
                </ul>
            </nav>

            <div>
                <div className='relative overflow-hidden rounded-xl flex md:flex-row flex-col h-[400px] from-black/10 to-black/5 bg-gradient-to-tr mt-2 gap-5 justify-between'>
                    <div className='md:w-1/2 p-3 flex flex-col justify-center h-full md:justify-center'>
                        <h1 className='text-3xl font-bold'>كون عالمك الخاص</h1>
                        <p className='mt-2'>
                            لا تهدر وقتك ومالك في مواجهه الصعوبات في مشروعك مثل الاخرين, <br />
                            انفرد وسطهم بتطورك ونجاحك <span className='text-red-500'>بالبرمجيات الحديثة</span> المصممة خصيصا لك انت !
                        </p>
                        <button className='z-10 hover:bg-white hover:text-black transition-all bg-black text-white p-2 px-7 rounded-xl mt-9 w-fit'>تواصل معنا</button>
                    </div>
                    <img className='absolute -top-10 left-[0vw] md:opacity-100 opacity-40' src="/images/header1.png" alt="image" />
                </div>

                <div className='my-5'></div>

                {/* <div className='flex flex-col'>
                    <div className='flex flex-col mx-auto w-fit'>
                        <h3 className='text-2xl font-medium'>افهم اكثر</h3>
                        <p className='ms-10 from-blue-700 via-violet-700 to-indigo-700 bg-gradient-to-r bg-clip-text text-transparent -mt-1'>مع فديو قصير</p>
                    </div>
                    <div className='p-5 flex flex-col justify-center items-center md:w-[550px] w-[90vw] h-[50vw] rounded-md md:h-[300px] bg-black mt-8 mx-auto text-white'>
                        <IoPlayCircleOutline size={50} className='cursor-pointer' />
                    </div>
                    <div className='w-fit mx-auto mt-1'>
                        <button className='p-2 rounded-md bg-white border border-black/80 transition-all hover:bg-black/10 hover:border-black/5'>
                            استفسر عن المزيد
                        </button>
                    </div>
                </div> */}

            </div>
        </header>
    )
}

export default Header
