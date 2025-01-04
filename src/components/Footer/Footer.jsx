import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer h-36 footer-center bg-[#2b3440] text-white mt-32 p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Rakibur Rahman Ratul</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;