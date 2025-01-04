import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const LatestProjectCard = ({ project }) => {
    // Settings for the react-slick carousel
    const sliderSettings = {

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
            {/* Carousel for project images */}
            <Slider {...sliderSettings}>
                {project.images.map((img, index) => (
                    <div key={index}>
                        <img
                            className="w-full h-48  bg-center bg-cover border-2"
                            src={img}
                            alt={`Project ${project.project_name} - ${index + 1}`}
                        />
                    </div>
                ))}
            </Slider>

            {/* Project Details */}
            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">Name: {project.project_name}</h2>
                <p className="text-gray-700 text-base text-justify mb-4">
                    <span className="font-bold text-xl">Purpose:</span> {project.purpose}
                </p>
                <Link to={`/details/${project.project_id}`}>
                    <button className="btn btn-outline border-0 border-l-2 border-b-8 border-r-4 border-t-2 md:w-48">
                        View Details
                    </button></Link>
            </div>
        </div>
    );
};

export default LatestProjectCard;
