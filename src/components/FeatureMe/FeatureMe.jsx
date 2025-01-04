import React from 'react';
import featuredImg from '../../assets/featured.jpeg'
import { Link } from 'react-router-dom';
const FeaturedMe = () => {
    return (
        <div className='w-11/12 mx-auto mt-28 bg-fixed text-white ' style={{ backgroundImage: `url(${featuredImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='bg-black bg-opacity-35 md:p-4'>
                <div className='lg:w-4/12 mx-auto'>

                    <div className="border-t border-white mt-2 p-2"></div>
                    <h1 className="text-center font-bold md:text-4xl uppercase text-xl">About Me</h1>
                    <div className="border-t border-white mb-10  mt-4 "></div>
                </div>
                <div className='md:flex justify-center bg-black bg-opacity-65 items-center py-8 px-16 gap-4'>
                    <div>
                        <img src={featuredImg} alt="" />

                    </div>
                    <div className='space-y-3 mt-1'>
                        
                       
                        <p>
                            Currently I am a student pursuing my degree in CSE. Coding is my true passion, with JavaScript being my absolute favorite. I thrive on learning new technologies and exploring the endless possibilities the tech world offers. When I'm not immersed in code, I enjoy playing & watching football, which keeps me active and focused. I’m originally from Sylhet, Bangladesh, and I’m always looking forward to the next challenge and opportunity to grow. Let’s connect and create something amazing together
                        </p>
                        <Link to='/aboutMe'><button className='btn mt-3 btn-outline border-spacing-2 w-56  border-white text-white'>Learn More</button></Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedMe;