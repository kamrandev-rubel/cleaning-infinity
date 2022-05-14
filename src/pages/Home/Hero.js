import React from 'react';
import bucketGirl from '../../assets/images/bucketgirl 1.png'

const Hero = () => {
    return (
        <div>
            <div class="hero lg:min-h-[60vh] bg-accent">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1 order-1 lg:order-none'>
                        <img src={bucketGirl} alt='' class="max-w-sm mx-auto" />
                    </div>
                    <div className='flex-1'>
                        <p class=" text-lg">Best Quality</p>
                        <h1 class="text-5xl font-bold">Professional Cleaning Service</h1>
                        <p class="py-6 text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='w-5/6 bg-info mx-auto mt-[-50px] relative z-50 p-6 rounded-xl'>
                <h2 className='text-primary text-4xl mb-6'>Get Free Estimate</h2>
                <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-5 mb-6'>
                    <input type="text" placeholder="" class="input input-bordered w-full" />
                    <input type="text" placeholder="" class="input input-bordered w-full" />
                    <input type="text" placeholder="" class="input input-bordered w-full" />
                    <input type="text" placeholder="" class="input input-bordered w-full" />
                    <input type="text" placeholder="" class="input input-bordered w-full" />
                    <input type="text" placeholder="" class="input input-bordered w-full" />
                    <input type="text" placeholder="" class="input input-bordered w-full" />
                    <input type="text" placeholder="" class="input input-bordered w-full" />
                </div>
                <button className='btn btn-primary'>REQUEST A QOUTE</button>
            </div>
        </div>
    );
};

export default Hero;