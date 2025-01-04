import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div className="min-h-screen bg-[#f5f5f5] flex flex-col justify-between">
        <div className=''>
            <NavBar></NavBar>
            <Outlet></Outlet>
           
        </div>
        <Footer></Footer>
    </div>
    );
};

export default Root;