import React, { useState, useEffect } from 'react';
import { Heart, Compass, LogIn } from 'lucide-react';
import LoginSignupModal from '../../modal/logins/LoginSignupModal';

const SmFooter = () => {
    const [active, setActive] = useState('explore');
    const [visible, setVisible] = useState(true);
    let lastScrollY = window.scrollY;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setVisible(false); // Hide on scroll down
            } else {
                setVisible(true); // Show on scroll up
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
        <div className="md:hidden block">
        <div
            className={`fixed bottom-0 left-0 w-full bg-white shadow-md p-3 flex justify-around items-center border-t transition-transform duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'
                }`}
        >
            <button className="flex flex-col items-center" onClick={() => setActive('wishlist')}>
                <Heart className={`w-6 h-6 ${active === 'wishlist' ? 'text-blue-500' : 'text-gray-500'}`} />
                <span className={`text-sm ${active === 'wishlist' ? 'text-blue-500' : 'text-gray-500'}`}>Wishlist</span>
            </button>

            <button className="flex flex-col items-center" onClick={() => setActive('explore')}>
                <Compass className={`w-6 h-6 ${active === 'explore' ? 'text-blue-500' : 'text-gray-500'}`} />
                <span className={`text-sm ${active === 'explore' ? 'text-blue-500' : 'text-gray-500'}`}>Explore</span>
            </button>
            <button
                onClick={() => document.getElementById('my_modal_3').showModal()}
                className=" "
            >
                <button className="flex flex-col items-center" onClick={() => setActive('login')}>
                    <LogIn className={`w-6 h-6 ${active === 'login' ? 'text-blue-500' : 'text-gray-500'}`} />
                    <span className={`text-sm ${active === 'login' ? 'text-blue-500' : 'text-gray-500'}`}>Log In</span>
                </button>
            </button>
            <LoginSignupModal/>
        </div>
        </div>
        </>
    );
};

export default SmFooter;
