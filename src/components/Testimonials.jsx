import React, { useEffect, useState } from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import gsap from 'gsap';

const Testimonials = () => {
    const testimonials = [
        {
            "name": "محمد حسن",
            "jobTitle": "بوكر في شركة عقارات",
            "comment": "كنت محتاج موقع اعرض كل اللي عندي ويكون في filter عشان الclients يعرفو يجيبو كل اللي هم عايزينو منغير ما يسأل وانا ادور على اللي طلبو وياخد وقت كتير جدا",
            "image": "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/441220319_1148718349806885_3080307027103083179_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=DqY2N7dDYLMQ7kNvgGM2C3j&_nc_ht=scontent.fcai19-7.fna&_nc_gid=ANg8ZXVu4bLEUIeyBKlkmly&oh=00_AYAX-VlKub3Hhki_wN20PULeaD6lSBQOHe9UMShf0nXc_A&oe=67042BFD",
        },
        {
            "name": "الكوتش عبد الرحيم",
            "jobTitle": "صاحب جيم",
            "comment": "دورت على اكتر من شركة واكتر من حد يقدر يركبلي سيستم دخول وخروج الموظفين وكارنيهات الclients بمجر مرورهم من الباب وفعلا لقيت حاجة سهله الاستخدام وحلوة جدا",
            "image": "https://scontent.fcai19-7.fna.fbcdn.net/v/t39.30808-6/453773015_2716844338494604_3152240010412588052_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=1wlF6sLgX3YQ7kNvgFKuPDr&_nc_ht=scontent.fcai19-7.fna&_nc_gid=AAclgoN9_wJqwUkhoxsgP0f&oh=00_AYAjF3HlSrCWiXgo0eG3l-z09eILo9WKEKh_3XjyBlI3Hg&oe=670435FB",
        },
        {
            "name": "المهندس مصطفى",
            "jobTitle": "صاحب عمل حر تجارة الكترونية",
            "comment": "كنت شغال على wordpress بقالي فترة بس مكنش مريحني في حساب المرتجعات والارباح والمخازن بطريقة مريحة وكنت دايما بتلخبط.. بس الحمدلله يوسف عملي حاجة سهله جدا جدا وحلوة ساعدتني كتير بقالي اكتر حوالي سنتين شغال عليها بارتياح",
            "image": "https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg",
        },
    ]

    // State for the active testimonial
    const [activeTestimonial, setActiveTestimonial] = useState(testimonials[0]);

    // GSAP animation function
    const animateTestimonialChange = () => {
        gsap.fromTo('.testimonial-text', { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
    };

    useEffect(() => {
        // Trigger animation on testimonial change
        animateTestimonialChange();
    }, [activeTestimonial]);

    const handleImageClick = (testimonial) => {
        setActiveTestimonial(testimonial);
    };

    return (
        <div className='min-h-screen z-40 flex flex-col justify-center p-4 items-center'>
            <div className='flex flex-col md:flex-row gap-5 w-full p-3 items-center'>
                {/* Right Section: Active Testimonial Text */}
                <div className='md:w-1/2 w-full flex flex-col h-fit testimonial-text'>
                    <p>{activeTestimonial?.name}</p>
                    <small className='text-gray-500'>{activeTestimonial?.jobTitle}</small>
                    <p className='md:text-2xl text-xl font-medium mt-5'>
                        <span>
                            <FaQuoteRight className='text-red-400' size={20} />
                        </span>
                        <span className='mx-2'>{activeTestimonial?.comment}</span>
                        <span>
                            <FaQuoteLeft className='text-red-400' size={15} />
                        </span>
                    </p>
                </div>

                {/* Left Section: Image Slider */}
                <Swiper slidesPerView={'auto'} spaceBetween={20} className='md:w-1/2 w-full'>
                    {testimonials?.map((item, index) => (
                        <SwiperSlide key={index} className='w-fit mt-auto'>
                            <img
                                src={item.image}
                                alt={item.name}
                                className={`cursor-pointer transition-all duration-700 ${activeTestimonial.name === item.name ? 'w-[300px] opacity-100' : 'w-[200px] opacity-70'
                                    }`}
                                onClick={() => handleImageClick(item)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials
