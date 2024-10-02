import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'
import { FaArrowDown } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)
const Yusuf = () => {
    useEffect(() => {
        gsap.fromTo('#yusuf-img', {
            filter: 'blur(15px)',
        }, {
            filter: 'blur(0px)',
            duration: 1.5,
            scrollTrigger: {
                trigger: '#yusuf-img',
                start: 'top 100%',
                end: 'bottom 50%',
                scrub: true
            }
        })
        gsap.fromTo('#yusuf-h1', {
            filter: 'blur(4px)',
            marginRight: "-40px",
        }, {
            filter: 'blur(0px)',
            marginRight: "0px",
            duration: 1.5,
            scrollTrigger: {
                trigger: '#yusuf-h1',
                start: 'top 70%',
                end: 'bottom 50%',
                scrub: true
            }
        })
        gsap.fromTo('#yusuf-p', {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 1.5,
            scrollTrigger: {
                trigger: '#yusuf-p',
                start: 'top 60%',
                end: 'bottom 30%',
                scrub: true
            }
        })
    })
    return (
        <div className='min-h-screen p-2 bg-neutral-800'>
            <div className='flex flex-row relative gap-2 justify-center items-center'>
                <img id='yusuf-img' className='opacity-60 z-20 relative md:w-[300px] w-full' src="/images/yusuf.jpeg" alt="" />
                <div className='text-white flex flex-col z-10 md:relative absolute'>
                    <h1 id='yusuf-h1' className='text-5xl font-bold text-white'>YUSUF SHREEF</h1>
                    <p id='yusuf-p'>
                        FOUNDER - CEO
                    </p>
                </div>
            </div>

            <div className='text-white flex flex-col mt-20 items-center'>
                <div className='flex flex-col'>
                    <p>مازلت لا تشعر بالأمان؟</p>
                    <p>مازلت لا تعلم من اين تبدأ ؟</p>
                    <p className='font-medium text-3xl flex-col gap-2 mt-5 text-red-500'>
                        <span>انظر الى تقيمات عملاءنا</span>
                        <p className='mx-auto w-fit mt-2'>
                            <FaArrowDown />
                        </p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Yusuf
