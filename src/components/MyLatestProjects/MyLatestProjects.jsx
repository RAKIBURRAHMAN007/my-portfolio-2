import React, { useEffect, useState } from 'react';
import LatestProjectCard from './LatestProjectCard';

const MyLatestProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('project.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <div className="w-11/12 mx-auto mt-36">
            {/* Section Title */}
            <h1 className="font-bold text-center text-2xl md:text-3xl lg:text-4xl">
                Explore My Recent <br /> Projects
            </h1>

            {/* Project Grid */}
            <div className='flex justify-center'>
                <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        projects.map(project => (
                            <LatestProjectCard key={project.id} project={project} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default MyLatestProjects;
