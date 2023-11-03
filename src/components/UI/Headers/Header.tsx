'use client'

import { isLoggedIn } from '@/services/auth.services';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import DropDown from './DropDown';
import { useGetProfileQuery } from '@/redux/api/userApi';
import Loader from '@/components/UI/Shared/Loader';
import Image from 'next/image';
import logo from "@/assets/white-logo.png"

const Header = () => {
    const [isNavOpen, setNavOpen] = useState(false);
    const userLoggedIn = isLoggedIn();
    const { data, isLoading } = useGetProfileQuery({});

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    };

    useEffect(() => {
        const btnHumb = document.querySelector("[data-toggle-navbar]");
        const navbar = document.querySelector("[data-navbar]");
        const overlay = document.querySelector("[data-nav-overlay]");

        if (btnHumb && navbar && overlay) {
            const toggleBtnAttr = () => {
                const isOpen = btnHumb.getAttribute("data-is-open");
                btnHumb.setAttribute("data-is-open", isOpen === "true" ? "false" : "true");
                if (isOpen === "false") {
                    overlay.classList.toggle("hidden");
                } else {
                    overlay.classList.add("hidden");
                }
            };

            btnHumb.addEventListener("click", () => {
                navbar.classList.toggle("invisible");
                navbar.classList.toggle("opacity-0");
                navbar.classList.toggle("translate-y-10");
                toggleBtnAttr();
            });

            overlay.addEventListener("click", () => {
                navbar.classList.add("invisible");
                navbar.classList.add("opacity-0");
                navbar.classList.add("translate-y-10");
                toggleBtnAttr();
            });
        }
    }, []);

    if (isLoading) {
        return <Loader />
    }

    return (
        <div className="inset-x-0 top-0 bg-[#0f337a] lg:fixed z-50">
            <div className="mx-auto w-full px-5 sm:px-10 md:px-10 lg:px-12">
                <div className="w-full flex justify-between gap-6 relative">
                    <div className="min-w-max inline-flex relative">
                        <Link href={`/`} className="flex items-center text-xl text-white font-semibold mb-2 font-serif">
                            <Image width={50} height={60} src={logo} alt="logo" className="m-1.5 p-1.5" />
                            Wayfarer Travels
                        </Link>
                    </div>
                    <div data-nav-overlay aria-hidden="true" className={`fixed ${isNavOpen ? 'block' : 'hidden'} inset-0 lg:!hidden bg-gray-800/60 bg-opacity-50 backdrop-filter backdrop-blur-xl`}></div>
                    <div data-navbar className={`flex ${isNavOpen ? '' : 'invisible opacity-0 translate-y-10'} lg:visible lg:opacity-100  lg:-translate-y-0 lg:scale-y-100 duration-300 ease-linear flex-col gap-y-6 gap-x-4 lg:flex-row w-full lg:justify-end lg:items-center absolute lg:relative top-full lg:top-0 bg-white lg:!bg-transparent border-x border-x-gray-100 lg:border-x-0`}>
                        <div className="flex lg:flex-row flex-col text-center lg:mt-0 mt-4 z-50  gap-5 text-md font-normal font-serif lg:text-white">
                            <Link href={`/`}>Home</Link>
                            <Link href={`/package`}>Packages</Link>
                            <Link href={`/about`}>About</Link>
                            <Link href={`/news`}>News</Link>
                            <Link href={`/faq`}>FAQ</Link>
                            <Link href={`/contact`}>Contact</Link>
                        </div>
                        {
                            userLoggedIn ? (
                                <div className='flex mr-2 font-semibold items-center'>
                                    <span className="mr-2 capitalize">{data?.name}</span>
                                    <DropDown />
                                </div>
                            ) : (
                                <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-gray-100   lg:border-0 px-6 lg:px-0">
                                    <Link href="/register" className="flex text-black ml-3 justify-center items-center w-full sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 after:bg-yellow-400 hover:after:opacity-100 hover:after:scale-[2.5] bg-yellow-400 border-transparent hover:border-white">
                                        <span className="relative z-10 text-white font-bold">
                                            REGISTER / LOGIN
                                        </span>
                                    </Link>
                                </div>
                            )
                        }

                    </div>

                    <div className="min-w-max flex items-center gap-x-3">
                        <button data-toggle-navbar data-is-open={isNavOpen ? 'true' : 'false'} className="lg:hidden lg:invisible outline-none w-7 h-auto flex flex-col relative" onClick={toggleNav}>
                            <span id="line-1" className={`w-6 h-0.5 rounded-full bg-gray-700 transition-all duration-300 ease-linear ${isNavOpen ? 'transform translateY(0.375rem) rotate(40deg)' : ''}`}></span>
                            <span id="line-2" className={`w-6 origin-center mt-1 h-0.5 rounded-ful bg-gray-700 transition-all duration-300 ease-linear ${isNavOpen ? 'transform scaleX(0) opacity-0' : ''}`}></span>
                            <span id="line-3" className={`w-6 mt-1 h-0.5 rounded-ful bg-gray-700 transition-all duration-300 ease-linear ${isNavOpen ? 'transform translateY(-0.375rem) rotate(-40deg)' : ''}`}></span>
                            <span className="sr-only">togglenav</span>
                        </button>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default Header;
