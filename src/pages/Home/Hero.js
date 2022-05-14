import React from 'react';
import bucketGirl from '../../assets/images/bucketgirl 1.png'

const Hero = () => {
    return (
        <div>
            <div class="hero lg:min-h-[60vh] bg-accent">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1 order-1 lg:order-none'>
                        <img
                            src={bucketGirl}
                            alt=''
                            class="sm:max-w-sm mx-auto"
                            data-aos="fade-up"
                            data-aos-duration="1200"
                        />
                    </div>
                    <div className='flex-1' data-aos="fade-right">
                        <p
                            data-aos="fade-right"
                            data-aos-duration="1400"
                            data-aos-delay="300"
                            class=" text-lg"
                        >Best Quality</p>
                        <h1
                            data-aos="fade-right"
                            data-aos-duration="1500"
                            data-aos-delay="500"
                            class="text-4xl sm:text-5xl font-bold"
                        >Professional Cleaning Service</h1>
                        <p
                            data-aos="fade-right"
                            data-aos-duration="1400"
                            data-aos-delay="1000"
                            class="py-6 sm:text-lg"
                        >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                        <button
                            data-aos="zoom-in"
                            data-aos-delay="1500"
                            data-aos-duration="1200"
                            class="btn btn-primary"
                        >Get Started</button>
                    </div>
                </div>
            </div>
            <div className='w-5/6 bg-info mx-auto mt-[-50px] relative z-50 p-6 rounded-xl'>
                <h2 className='text-primary text-4xl mb-6'>Get Free Estimate</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6'>
                    <input
                        type="text"
                        placeholder="Your Name"
                        class="input input-bordered w-full"
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        class="input input-bordered w-full"
                    />
                    <input
                        type="text"
                        placeholder="Type of cleaning"
                        class="input 
                        input-bordered w-full"
                    />
                    <input
                        type="text"
                        placeholder="Type of Cleaning"
                        class="input input-bordered w-full"
                    />
                    <input
                        type="text"
                        placeholder="Number of bedrooms"
                        class="input input-bordered w-full"
                    />
                    <input
                        type="text"
                        placeholder="Number of bathrooms"
                        class="input input-bordered w-full"
                    />
                    <input
                        type="text"
                        placeholder="Frequency of Cleaning"
                        class="input input-bordered w-full"
                    />
                    <input
                        type="text"
                        placeholder="Type of Cleaning"
                        class="input input-bordered w-full"
                    />
                </div>
                <button className='btn btn-primary'>REQUEST A QOUTE</button>
            </div>
        </div>
    );
};

export default Hero;