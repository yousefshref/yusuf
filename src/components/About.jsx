import React, { useEffect } from 'react'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    useEffect(() => {
        gsap.to('#about-texts', {
            scrollTrigger: {
                trigger: '#about-texts',
                start: 'top 90%',
                end: 'top 30%',
                scrub: true
            },
            opacity: 1,
            filter: "blur(0px)"
        })
    }, [])
    useEffect(() => {
        gsap.to('#about-img-2', {
            scrollTrigger: {
                trigger: '#about-img-2',
                start: 'top 90%',
                end: 'top 30%',
                scrub: true
            },
            opacity: 1,
            filter: "blur(0px)",
            top: 0
        })
    }, [])
    useEffect(() => {
        gsap.to('#about-img-1', {
            scrollTrigger: {
                trigger: '#about-img-1',
                start: 'top 90%',
                end: 'top 30%',
                scrub: true
            },
            opacity: 1,
            filter: "blur(0px)",
        })
    }, [])



    useEffect(() => {
        gsap.to('#about-fixed-text', {
            scrollTrigger: {
                trigger: '#about-fixed-text-container',
                start: 'top 60%',
                end: 'bottom 10%',
                scrub: true,
                onLeave: () => {
                    gsap.to('#about-fixed-text', {
                        opacity: 0,
                        zIndex: -1
                    })
                },
                // onEnterBack: () => {
                //     gsap.to('#about-fixed-text', {
                //         opacity: 1,
                //         zIndex: 1
                //     })
                // }
            },
            opacity: 1,
            zIndex: 1
        })
    }, [])
    useEffect(() => {
        gsap.to('#about-fixed-text-2', {
            scrollTrigger: {
                trigger: '#about-fixed-text-container-2',
                start: 'top 100%',
                end: 'bottom 40%',
                scrub: true,
                onLeave: () => {
                    gsap.to('#about-fixed-text-2', {
                        opacity: 0,
                        zIndex: -1
                    })
                },
                // onEnterBack: () => {
                //     gsap.to('#about-fixed-text-2', {
                //         opacity: 1,
                //         zIndex: 1
                //     })
                // }
            },
            opacity: 1,
            zIndex: 1
        })
    }, [])
    useEffect(() => {
        gsap.to('#about-fixed-img-1', {
            scrollTrigger: {
                trigger: '#about-fixed-text-container',
                start: 'top 30%',
                end: 'bottom 10%',
                scrub: true,
            },
            filter: "blur(0px)",
            bottom: window.innerWidth > 768 ? "100px" : "30px"
        })
    }, [])
    useEffect(() => {
        gsap.to('#about-fixed-img-2', {
            scrollTrigger: {
                trigger: '#about-fixed-text-container',
                start: 'top 60%',
                end: 'bottom 30%',
                scrub: true,
            },
            filter: "blur(0px)",
            top: window.innerWidth > 768 ? "100px" : "30px"
        })
    }, [])



    useEffect(() => {
        gsap.to('#about-fixed-img-3', {
            scrollTrigger: {
                trigger: '#about-fixed-text-container-2',
                start: 'top 30%',
                end: 'bottom 10%',
                scrub: true,
            },
            filter: "blur(0px)",
            bottom: "100px"
        })
    }, [])

    return (
        <div className='flex flex-col h-[900vh]'>
            {/* text and image */}
            <div className='flex md:flex-row flex-col gap-3 p-2 md:justify-between items-center h-[100vh]'>
                <div id='about-texts' className='flex flex-col w-full md:w-1/2 blur-[5px] opacity-0'>
                    <h1 className='text-3xl font-bold mb-2'>ماذا تعرف عن YUSUF ?</h1>
                    <p className='text-gray-500'>نساعجك في تسهيل اعمالك وتطوير ادوات تسهل عليك عملك وتكون متقدم ب10 خطوات عن الكل.</p>
                    <p className='text-gray-500'>بالاضافة الى جعلك متميز في الظهور وتكون كالنجوم وسط البقيه.</p>
                </div>
                <div className='relative flex flex-col w-full md:w-1/2'>
                    <img className='opacity-0 blur-[10px] ' id='about-img-1' src="https://cdn-icons-png.flaticon.com/512/6486/6486304.png" alt="" />
                    <img id='about-img-2' src="https://cdn-icons-png.flaticon.com/512/6858/6858475.png" alt="" className='absolute top-[200px] w-[200px] blur-[20px] opacity-0' />
                </div>
            </div>
            {/* text or image */}
            <div id='about-fixed-text-container' className='h-[400vh]'>
                <div id='about-fixed-text' className='fixed -z-10 opacity-0 p-2 flex flex-col justify-center items-center bg-black text-white top-0 left-0 w-full h-full'>
                    <div className='z-10 flex flex-col gap-1'>
                        <strong className='text-3xl'>لديك شركة/ عمل خاص على سبيل المثال</strong>
                        <p className='text-sm'>كيف ستعرض اعمالك بأحترافية لجعل العملاء يثقون بك ؟</p>
                    </div>
                    <img className='fixed lg:opacity-100 opacity-90 lg:w-[300px] w-[200px] right-[30px] bottom-[10px] blur-[20px]' id='about-fixed-img-1' src="https://i.pinimg.com/564x/06/99/15/0699150a2a1bf19c3cd037d69aa5d20d.jpg" alt="" />
                    <img className='fixed lg:opacity-100 opacity-90 lg:w-[300px] w-[200px] left-[30px] top-[0px] blur-[20px]' id='about-fixed-img-2' src="https://i.pinimg.com/564x/27/a6/8c/27a68c693a63be857bab7b750a2ef78d.jpg" alt="" />
                </div>
            </div>
            {/* text or image */}
            <div id='about-fixed-text-container-2' className='h-[400vh]'>
                <div id='about-fixed-text-2' className='fixed -z-10 opacity-0 p-2 flex flex-col justify-center items-center bg-white text-black top-0 left-0 w-full h-full'>
                    <strong className='text-3xl z-10'>فهذا الحل!</strong>
                    <p className='z-10'>اعرض خدماتك ومنتجاتك عبر موقع الكتروني</p>
                    <button className='z-10 bg-black text-white transition-all hover:bg-white hover:text-black p-2 px-7 rounded-xl mt-9 w-fit'>تواصل معنا</button>
                    <img className='fixed w-[300px] left-[30px] top-[0px] blur-[20px]' id='about-fixed-img-3' src="https://i.pinimg.com/564x/85/63/44/856344ae5dde9b28523871c46d467576.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
