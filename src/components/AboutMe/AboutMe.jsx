import React from 'react';
import { Helmet } from 'react-helmet';
import profileImage from '../../assets/profile.jpeg'; // Replace with your actual image path

const AboutMe = () => {
    return (
        <div className="w-11/12 mx-auto mt-16 py-12">
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Me | Ratul-Portfolio</title>
            </Helmet>

            <div className="md:flex items-stretch gap-10">
                {/* Left Side: Image */}
                <div className="md:w-1/2 flex items-center justify-center">
                    <img
                        src={profileImage}
                        alt="Ratul Rahman"
                        className="h-full w-auto rounded-lg shadow-lg object-cover"
                    />
                </div>

                {/* Right Side: Text */}
                <div className="md:w-1/2 space-y-10 flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl mt-2 md:mt-0 font-bold mb-4">My Web Journey</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            My journey into web development began during the COVID-19 pandemic. With plenty of time at hand, I started learning HTML, CSS, and Bootstrap. The thrill of seeing my work come to life in real-time made me fall in love with development. However, due to challenges and the closure of my IT center, I had to pause my learning journey.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            After getting admitted to university, I shifted focus to courses like C++, Python, Java, Object-Oriented Programming (OOP), Data Structures, and Algorithms. While these subjects expanded my programming skills, my love for development—especially JavaScript—never faded.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            In 2024, I reignited my passion by joining <span className="font-semibold">Programming Hero</span>, diving into web development with full dedication. This journey has been a transformative experience, reigniting my love for coding and building projects.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            I’m now focused on growing further as a developer. My next goal is to explore <span className="italic">React Native</span>, and InshaAllah, I’ll begin that journey soon.
                        </p>
                        <p className="text-lg text-gray-600">
                            <span className="font-bold">Lastly, a little about me: </span>
                            I was born in <span className="font-semibold">Tengratila</span>, a serene village in the Sylhet division. Growing up in the village, I completed my schooling surrounded by the beauty and simplicity of rural life. Later, I moved to the town to pursue my higher studies in college and university. This shift gave me exposure to new opportunities and experiences that shaped my ambitions and goals. In my free time, I enjoy watching football and related content online, and when I get the chance, I love playing football as well. It’s one of my favorite ways to relax and stay active. I take pride in supporting my favorite team, as you can see in the picture where I’m wearing their jersey.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
