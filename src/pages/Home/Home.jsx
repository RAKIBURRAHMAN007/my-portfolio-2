import React from 'react';
import Banner from '../../components/Banner/Banner';
import AboutMe from '../../components/AboutMe/AboutMe';
import FeaturedMe from '../../components/FeatureMe/FeatureMe';
import Myskills from '../../components/Skills/Myskills';
import MyEducation from '../../components/MyEducation/MYEducation';
import EducationSmall from '../../components/EducationSmall/EducationSmall';
import MyLatestProjects from '../../components/MyLatestProjects/MyLatestProjects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedMe></FeaturedMe>
            <Myskills></Myskills>
            <EducationSmall></EducationSmall>
            <MyLatestProjects></MyLatestProjects>
          
        </div>
    );
};

export default Home;