import React from 'react';
import Banner from '../../components/Banner/Banner';
import AboutMe from '../../components/AboutMe/AboutMe';
import FeaturedMe from '../../components/FeatureMe/FeatureMe';
import Myskills from '../../components/Skills/Myskills';
import MyEducation from '../../components/MyEducation/MYEducation';
import EducationSmall from '../../components/EducationSmall/EducationSmall';
import MyLatestProjects from '../../components/MyLatestProjects/MyLatestProjects';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Ratul-Portfolio</title>
                
            </Helmet>
            <Banner></Banner>
            <FeaturedMe></FeaturedMe>
            <Myskills></Myskills>
            <EducationSmall></EducationSmall>
            <MyLatestProjects></MyLatestProjects>

        </div>
    );
};

export default Home;