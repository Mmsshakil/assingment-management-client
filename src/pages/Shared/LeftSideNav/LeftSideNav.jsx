
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaDiscord, FaTelegram, FaSkype, FaWhatsapp } from 'react-icons/fa6';

const LeftSideNav = () => {
    return (
        <div>

            <div className='p-4 mt-0  lg:mb-6 border-double border-4 border-emerald-900 text-emerald-500'>
                <h2 className='text-lg lg:text-2xl font-bold   mb-3'>Follow Us On</h2>
                <div className='p-4 border border-zinc-600 rounded-t-md'>
                    <a className="flex items-center gap-2" href='' >
                        <FaFacebookF></FaFacebookF>
                        <p>Facebook</p>
                    </a>
                </div>
                <div className='p-4 border-x border-zinc-600'>
                    <a className="flex items-center gap-2" href='' >
                        <FaTwitter></FaTwitter>
                        <p>Twitter</p>
                    </a>
                </div>
                <div className='p-4 border border-zinc-600 '>
                    <a className="flex items-center gap-2" href='' >
                        <FaInstagram></FaInstagram>
                        <p>Instagram</p>
                    </a>
                </div>
                <div className='p-4 border-x border-zinc-600 '>
                    <a className="flex items-center gap-2" href='' >
                        <FaTiktok></FaTiktok>
                        <p>Tiktok</p>
                    </a>
                </div>
                <div className='p-4 border border-zinc-600 '>
                    <a className="flex items-center gap-2" href='' >
                        <FaDiscord></FaDiscord>
                        <p>Discord</p>
                    </a>
                </div>
                <div className='p-4 border-x border-zinc-600 '>
                    <a className="flex items-center gap-2" href='' >
                        <FaTelegram></FaTelegram>
                        <p>Telegram</p>
                    </a>
                </div>
                <div className='p-4 border border-b-0 border-zinc-600 '>
                    <a className="flex items-center gap-2" href='' >
                        <FaSkype></FaSkype>
                        <p>Skype</p>
                    </a>
                </div>
                <div className='p-4 border border-zinc-600 rounded-b-md'>
                    <a className="flex items-center gap-2" href='' >
                        <FaWhatsapp></FaWhatsapp>
                        <p>Whats app</p>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default LeftSideNav;