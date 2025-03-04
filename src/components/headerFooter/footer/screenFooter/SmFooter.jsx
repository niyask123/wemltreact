import React, { useState, useEffect, useRef } from 'react';
import { Heart, Compass, LogIn } from 'lucide-react';
import LoginSignupModal from '../../../modal/logins/LoginSignupModal';

const SmFooter = () => {

   
    const modalRef = useRef(null);
    const [active, setActive] = useState('explore');
    const [visible, setVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY.current) {
                setVisible(false); // Hide on scroll down
            } else {
                setVisible(true); // Show on scroll up
            }
            lastScrollY.current = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="md:hidden block">
            <div
                className={`fixed bottom-0 rounded-t-2xl left-0 w-full bg-white shadow-md p-3 flex justify-around items-center border-t transition-transform duration-300 ${visible ? 'translate-y-0' : 'translate-y-full'}`}
            >
                <button className="flex flex-col items-center" onClick={() => setActive('wishlist')}>
                    <Heart className={`w-6 h-6 ${active === 'wishlist' ? 'text-[#ef1b27]' : 'text-gray-500'}`} />
                    <span className={`text-xs ${active === 'wishlist' ? 'text-[#ef1b27]' : 'text-gray-500'}`}>Wishlist</span>
                </button>

                <button className="flex flex-col items-center" onClick={() => setActive('explore')}>
                    <Compass className={`w-6 h-6 ${active === 'explore' ? 'text-[#ef1b27]' : 'text-gray-500'}`} />
                    <span className={`text-xs ${active === 'explore' ? 'text-[#ef1b27]' : 'text-gray-500'}`}>Explore</span>
                </button>

                <button
                    className="flex flex-col items-center"
                    onClick={() => {
                        setActive('login');
                        if (modalRef.current) {
                            console.log("Opening Modal...");
                            modalRef.current.showModal();
                        }
                    }}
                >
                    <LogIn className={`w-6 h-6 ${active === 'login' ? 'text-[#ef1b27]' : 'text-gray-500'}`} />
                    <span className={`text-xs ${active === 'login' ? 'text-[#ef1b27]' : 'text-gray-500'}`}>Log In</span>
                </button>

                
            </div>
             {/* Login Modal */}
             <LoginSignupModal modalRef={modalRef} />
        </div>
    );
};

export default SmFooter;
