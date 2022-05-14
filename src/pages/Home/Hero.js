import React from 'react';
import bucketGirl from '../../assets/images/bucketgirl 1.png'

const Hero = () => {
    return (
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
    );
};

export default Hero;