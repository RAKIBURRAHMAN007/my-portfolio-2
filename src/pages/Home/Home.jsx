import React from 'react';
import { easeOut, motion } from "framer-motion";
import { useTypewriter } from 'react-simple-typewriter';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import dp from '../../assets/ratul.jpeg'
const Home = () => {
    const [text] = useTypewriter({
        words: ['A passionate  Front-end Developer', 'Computer Science Enthusiast'],
        loop: 0
    });

    return (
        <div className="w-5/6 mx-auto mt-32">
            <div className="md:flex justify-between">
                {/* Left Section */}
                <div className="md:w-2/3">
                    <div className="space-y-3">
                        <h1 className="font-bold text-2xl">Hey there!</h1>
                        <h1 className="font-bold text-2xl md:text-2xl lg:text-4xl">
                            I’m <span className="text-[#eb5423]">Rakibur Rahman Ratul</span>
                        </h1>
                        <h1 className="font-bold text-[17px] md:text-2xl lg:text-4xl">👨‍💻{text}</h1>
                    </div>

                    <div className="mt-9 flex space-x-6">

                        <a
                            href="https://www.linkedin.com/in/rakibur-rahman-ratul-9a1585280/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0077b5] text-4xl hover:scale-125 transition-transform duration-300"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://github.com/RAKIBURRAHMAN007"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black text-4xl hover:scale-125 transition-transform duration-300"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://www.instagram.com/rakibur_r_ratul/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#e4405f] text-4xl hover:scale-125 transition-transform duration-300"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="https://web.facebook.com/rakiburrahman.ratul.14/?_rdc=1&_rdr#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#3b5998] text-4xl hover:scale-125 transition-transform duration-300"
                        >
                            <FaFacebook />
                        </a>
                    </div>
                    <div className='mt-16'>
                        <button className="btn btn-outline border-0 border-l-2 border-b-8 border-r-4 border-t-2 w-48">
                            Resume
                        </button>
                    </div>
                </div>

                <div className="md:w-1/3 mt-5 md:mt-0">
                    <div className='flex-1'>
                        <motion.img
                            src={dp}
                            animate={{ y: [10, 70, 10] }}
                            transition={{ duration: 10, repeat: Infinity }}
                            className="max-w-sm w-full md:w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-black shadow-2xl" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;
