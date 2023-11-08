
import { FaFacebookF,FaTwitter,FaGithub, FaBookOpen } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-300 my-10 ">
            <aside className=' '>
                <div className='text-4xl'><FaBookOpen></FaBookOpen></div>
                <p className='text-base'>Copyright © 2023 - All rights reserved to MMSS Corporation</p>
            </aside>
            <nav>
                <header className="footer-title">Social</header>
                <div className="grid grid-flow-col gap-4 text-2xl">
                    <a href='https://github.com/Mmsshakil'><FaGithub></FaGithub></a>
                    <a href='https://twitter.com'><FaTwitter></FaTwitter></a>
                    <a href='https://www.facebook.com'><FaFacebookF></FaFacebookF></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;