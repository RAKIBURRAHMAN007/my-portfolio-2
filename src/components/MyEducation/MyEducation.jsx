import React from "react";

const MyEducation = () => {
    return (
        <div className="education-page bg-gray-100 w-11/12 mx-auto mt-28 p-8" >
            <h1 className="text-4xl font-bold text-center mb-14">Academic Milestones</h1>

            <div className="education-section group bg-white hover:bg-[#2b3440] hover:text-white p-6 rounded-md shadow-md mb-6">
                <h2 className="text-2xl font-semibold group-hover:text-white">Bachelor of Science (BSc) in Engineering</h2>

                <p className="text-gray-600 group-hover:text-white">
                    <strong>Institution:</strong> Leading University
                </p>
                <p className="text-gray-600 group-hover:text-white">
                    <strong>Department:</strong> Computer Science and Engineering (CSE)
                </p>
                <p className="text-gray-600 group-hover:text-white">
                    <strong>Duration:</strong> [2022 – Present]
                </p>
                <ul className="list-disc pl-6 text-gray-700 group-hover:text-white mt-2">
                    <li>Currently pursuing my Bachelor's degree in Computer Science.</li>
                    <li>Exploring advanced coding and software development concepts.</li>
                </ul>
            </div>

            <div className="education-section group bg-white hover:bg-[#2b3440]  hover:text-white p-6 rounded-md shadow-md mb-6">
                <h2 className="text-2xl font-semibold group-hover:text-white">Higher Secondary Certificate (HSC)</h2>
                <p className="text-gray-600 group-hover:text-white">
                    <strong>Institution:</strong> Sunamgonj Government College
                </p>
                <p className="text-gray-600 group-hover:text-white">
                    <strong>Group:</strong> Science
                </p>
                <p className="text-gray-600 group-hover:text-white">
                    <strong>Duration:</strong> [2019 – 2020]
                </p>
                <ul className="list-disc pl-6 text-gray-700 group-hover:text-white mt-2">
                    <li>Built a strong foundation in mathematics, physics, and computer studies.</li>
                </ul>
            </div>

            <div className="education-section group bg-white hover:bg-[#2b3440]  hover:text-white p-6 rounded-md shadow-md mb-6">
                <h2 className="text-2xl font-semibold group-hover:text-white">Secondary School Certificate (SSC)</h2>
                <p className="text-gray-600 group-hover:text-white">
                    <strong>Institution:</strong> Tengra High School
                </p>
                <p className="text-gray-600 group-hover:text-white">
                    <strong>Group:</strong> Science
                </p>
                <p className="text-gray-600 group-hover:text-white">
                    <strong>Duration:</strong> [2017 – 2018]
                </p>
                <ul className="list-disc pl-6 text-gray-700 group-hover:text-white mt-2">
                    <li>Developed a keen interest in technology and Science.</li>
                </ul>
            </div>

            <div className="certifications-section group hover:bg-[#2b3440]  hover:text-white bg-white p-6 rounded-md shadow-md">
                <h2 className="text-2xl font-semibold group-hover:text-white">Certifications and Courses</h2>
                <ul className="list-disc pl-6 text-gray-700 group-hover:text-white mt-2">
                    <li>
                        <strong>[Complete Web Development]</strong> – [Programming Hero]
                    </li>
                    <li>
                        <strong>[CSE Fundamentals with Phitron]</strong> – [Programming Hero]
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MyEducation;
