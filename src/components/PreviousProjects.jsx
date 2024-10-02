import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect } from 'react'
import { DiDjango, DiReact } from 'react-icons/di'
import { GrNetwork } from 'react-icons/gr'
import { TbApi } from 'react-icons/tb'

gsap.registerPlugin(ScrollTrigger)
const PreviousProjects = () => {

    const projects = [
        {
            title: 'سيستم داخلي لتنظيم مراحل الانتاج',
            desc: 'شركة تسمى (ابداع) قمنا بتطوير software لها ينظم جميع مراحل انتاج الشركة والتصنيع والمخازن والمنتجات, هي شركة خاصة بتصنيع الكراسي والطاولات من الخشب وغيره',
            image: 'https://media.licdn.com/dms/image/v2/D4D0BAQF1Oy_Ugkvnjg/company-logo_200_200/company-logo_200_200/0/1719255759579/ebdaa_industrial_investment_logo?e=2147483647&v=beta&t=PtPluoaN4JT5jc4_UyFB_HcnQ3UI5HbBIMY8vX1uJBc',
            technologies: [
                <DiReact />,
                <DiDjango />,
                <TbApi />,
                <GrNetwork size={25} />
            ],
        },
        {
            title: 'Software لاستخراج شهادات تصريح وتنظيمها',
            desc: 'كانت من افضل التجارب التي مرينا بها.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBFce7gS7zk-v0Nhc0dTr1GW7B0fbYF_CACQ&s',
            imageWidth: 'max-w-[280px]',
            technologies: [
                <DiReact />,
                <DiDjango />,
                <TbApi size={30} />,
            ],
        },
        {
            title: 'سيستم يجعل يتحقق من الاشخاص عن طريق البصمة والوجه',
            desc: 'كان سيستم للموظفين الجدد يتحقق من وجوههم وبصمتهم قبل دخولهم... ويساعد في تنظيم الموظفين لاحقا وهو يشبه الerp',
            image: 'https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/458087905_920330923449257_8948797663060717845_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Lq6xCPJhdCQQ7kNvgHFBQzr&_nc_ht=scontent.fcai19-7.fna&oh=00_AYBPTL17WZ3roTlMc0cZo7QJtx6CW6NnXGZ7w0n62qY0-w&oe=6702E1B1',
            imageWidth: 'max-w-[200px]',
            technologies: [
                <DiReact />,
                <DiDjango />,
                <TbApi size={30} />,
            ],
        },
        {
            end: true
        },
    ]

    useEffect(() => {
        gsap.fromTo('#contact--', {
            opacity: 0,
            filter: "blur(10px)"
        }, {
            scrollTrigger: {
                trigger: '#contact--',
                start: 'top 100%',
                end: 'top 50%',
                scrub: true
            },
            opacity: 1,
            filter: "blur(0px)"
        })

        gsap.fromTo('#img--', {
            filter: "blur(10px)",
            left: '0px',
            bottom: '-20px',
            width: '260px',
        }, {
            filter: "blur(0px)",
            left: '0px',
            bottom: '10px',
            width: '300px',
            scrollTrigger: {
                trigger: '#img--',
                start: 'top 80%',
                end: 'top 20%',
                scrub: true
            },
        })
    }, [])

    return (
        <div className="scroll-container p-3 min-h-screen bg-neutral-800 text-white z-10 relative flex flex-col justify-center items-center">
            <h1 className="md:text-4xl text-2xl font-medium">من أقوي مشاريعنا...</h1>
            <div className='flex flex-wrap justify-center mt-5'>
                {projects.map((project, index) => (
                    project?.end ? (
                        <div className='p-1 flex flex-col md:h-auto h-[400px] md:w-1/2 w-full border overflow-hidden from-red-200/60 to-emerald-200/60 relative bg-gradient-to-br justify-center items-center'>
                            <strong className='text-4xl'>تريد شيئا مميزًا؟</strong>
                            <button className='z-10 active:bg-neutral-200 hover:bg-white hover:text-black transition-all bg-black text-white p-2 px-7 rounded-xl mt-3 w-fit'>تواصل معنا <span id='contact--'>واطلب ما تريد</span></button>

                            <img id='img--' className='absolute -z-10' src="https://cdn-icons-png.flaticon.com/512/1087/1087840.png" alt="" />
                        </div>
                    ) :
                        <div className='p-1 flex flex-col md:w-1/2 w-full border bg-white'>
                            <img className={`rounded-xl w-full ${project?.imageWidth ? project?.imageWidth : 'max-w-[200px]'}`} src={project.image} alt="image" />
                            <h1 className='text-2xl font-medium'>{project?.title}</h1>
                            <p className='mt-2 text-sm text-gray-500'>{project?.desc}</p>
                            <div className='flex gap-3 items-center mt-auto'>
                                {project?.technologies?.map((technology, index) => (
                                    <p className='text-red-500 text-4xl' key={index}>{technology}</p>
                                ))}
                            </div>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default PreviousProjects
