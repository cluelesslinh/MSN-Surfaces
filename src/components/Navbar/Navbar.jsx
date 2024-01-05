import { useState } from 'react';
import './NavbarElements.css';
import './navbar.css';

const HeadNavbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <>
            <div className="flex items-center justify-between py-8">
                <a className="logoBox" href="/">
                    <img className="logoImage" src="https://i.pinimg.com/originals/55/c3/38/55c33810bf31c06edd1410c61c1c2bda.png" alt="logo" />
                </a>
                <nav>
                    <section className="MOBILE-MENU flex">
                        <div
                            className="HAMBURGER-ICON space-y-2 lg:hidden"
                            onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        </div>

                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                            <div
                                className="absolute top-0 right-0 px-8 py-8"
                                onClick={() => setIsNavOpen(false)}
                            >
                                <svg
                                    className="h-8 w-8 text-gray-600"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <ul className="flex flex-col items-center justify-between min-h-[250px]">
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <a href="/home">Home</a>
                                </li>
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <a href="/countertops">Countertops</a>
                                </li>
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <a href="/paymentoptions">Payment Options</a>
                                </li>
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <a href="/contact">Contact</a>
                                </li>
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <a href="/about">About</a>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <ul className="navLinks DESKTOP-MENU hidden space-x-8 lg:flex">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/countertops">Countertops</a>
                        </li>
                        <li>
                            <a href="/paymentoptions">Payment Options</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                    </ul>
                </nav>
                <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
            </div>
        </>
    );
};

export default HeadNavbar