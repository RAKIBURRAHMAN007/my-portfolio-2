import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectDetails = () => {
    const projectData = useLoaderData();
    const { project_id } = useParams();
    const id = parseInt(project_id);
    const project = projectData.find(project => project.project_id === id);
    console.log(project);

    const { project_name, purpose, live_url, github_repo_link, images, key_features, npm_packages } = project;

    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className='w-11/12 mx-auto mt-32 border-2 bg-gray-100 border-black p-7'>
            <Slider {...sliderSettings}>
                {images.map((img, index) => (
                    <div key={index}>
                        <img
                            className="md:w-1/2 lg:w-4/5 mx-auto p-2 bg-center border-black bg-cover border-2"
                            src={img}
                            alt={`Project ${project.project_name} - ${index + 1}`}
                        />
                    </div>
                ))}
            </Slider>

            <div className="education-section border-black border group mt-6 bg-white p-6 rounded-md shadow-md mb-6">
                <h2 className="text-2xl font-semibold"><span className='font-bold text-2xl'>Name:</span> {project_name}</h2>
                <p className="text-gray-600 ">
                    <span className='font-bold text-2xl'>Purpose:</span> {purpose}
                </p>
                <p className="text-gray-600 ">
                    <span className='font-bold text-2xl'>Live-URL: </span><a className='text-red-600 underline' href={live_url}> {live_url}</a>
                </p>
                <p className="text-gray-600 ">
                    <span className='font-bold text-2xl'>Github Repo-Link: </span><a className='text-red-600 underline' href={github_repo_link}> {github_repo_link}</a>
                </p>
            </div>

            <div className="education-section border-black border group mt-6 bg-white p-6 rounded-md shadow-md mb-6">
                <h3 className="text-xl font-semibold">Key Features</h3>
                <ul className="list-disc pl-6">
                    {key_features.map((feature, index) => (
                        <li key={index} className="text-gray-700">{feature}</li>
                    ))}
                </ul>
            </div>

            <div className="education-section border-black border group mt-6 bg-white p-6 rounded-md shadow-md mb-6">
                <h3 className="text-xl font-semibold">Packages Used</h3>
                <ul className="list-disc pl-6">
                    {npm_packages.map((pkg, index) => (
                        <li key={index} className="text-gray-700">{pkg}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProjectDetails;
