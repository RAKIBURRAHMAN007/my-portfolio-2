import { div } from 'motion/react-client';
import React from 'react';
import { Link } from 'react-router-dom'; // For navigation

const EducationSmall = () => {
    return (
        <div className='w-11/12 mx-auto mt-20'>
            <div className="bg-[#2b3440] text-white collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-[#2b3440] text-white text-xl font-bold text-center peer-checked:bg-[#2b3440] peer-checked:text-secondary-content">
                   Click to: Uncover My Education
                </div>
                <div className="collapse-content bg-[#2b3440] text-white peer-checked:bg-[#2b3440] peer-checked:text-secondary-content">
                    <div>
                        <p className="text-xl leading-relaxed mt-4">
                            <span className="font-semibold font-mono">Institution:</span> Leading University
                        </p>
                        <p className="text-lg leading-relaxed font-mono mt-2">
                            <span className="font-semibold font-mono">Department:</span> Computer Science and Engineering (CSE)
                        </p>
                        <p className="text-lg leading-relaxed font-mono mt-2">
                            <span className="font-semibold font-mono">Duration:</span> [2022 – Present]
                        </p>
                        <p className="text-lg leading-relaxed mt-4 font-mono">
                            Currently pursuing my Bachelor's degree in Computer Science. Focused on exploring advanced coding and software development concepts.
                        </p>
                        <ul className="list-disc pl-6 font-mono mt-4">
                            <li>Developing skills in programming languages such as JavaScript, C++, Node.js, etc.</li>
                            <li>Studying algorithms, data structures, and computer systems.</li>
                            <li>Engaged in hands-on projects to build practical software solutions.</li>
                        </ul>

                        {/* Link to Full Education Page */}
                        <div className="mt-6 text-center">
                            <Link to="/education" className="btn btn-outline text-white   px-6 py-3">
                                Go to Full Education Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EducationSmall;
