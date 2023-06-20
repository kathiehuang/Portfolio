'use client'

import Image from 'next/image';
import styles from './page.module.css';
import React, { useEffect } from "react";
import '@fontsource/roboto';
import '@fontsource/open-sans';
import Transitions from './transitions';
import { Link } from 'react-scroll'

export default function HomePage() {

    const ProfilePic = () => (
        <Image
            src="/images/profile.jpeg" // Route of the image file
            height={140} // Desired size with correct aspect ratio
            width={140} // Desired size with correct aspect ratio
            alt="Kathie Huang"
            className="rounded-full"
        />
    );

    useEffect(() => {
        // Disable scrolling on the body element
        document.body.style.overflow = 'hidden';

        // Re-enable scrolling on component unmount
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, []);

    return (
        <div className="relative px-6 py-6 lg:px-8" id='/'>
            <div className="mx-auto max-w-2xl h-screen flex flex-col justify-center">
                    <div className="text-center">
                            <Transitions>
                                <div className="flex items-center justify-center">
                                    <h1 className="text-4xl tracking-tight px-6 text-gray-900 sm:text-6xl">
                                        Hi! I&apos;m <b className="font-bold font-sans">Kathie</b>.
                                    </h1>
                                    <div className="hidden lg:block">
                                     <a className="cursor-default bg-black rounded-full hover:opacity-50 opacity-100 transition-opacity ml-4" href="https://www.linkedin.com/in/kathie-huang" target="_blank">
                                            <ProfilePic />
                                        </a>
                                    </div>
                                </div>
                            </Transitions>
                        <Transitions>
                            <div className="lg:hidden mt-4 flex justify-center">
                                <a className="cursor-default bg-black rounded-full hover:opacity-50 opacity-100 transition-opacity" href="https://www.linkedin.com/in/kathie-huang" target="_blank">
                                    <ProfilePic />
                                </a>
                            </div>
                        </Transitions>
                        <Transitions>
                            <p className="mt-6 text-lg leading-8 text-gray-600 font-sans">
                                I am a third-year college student at Duke University planning on
                                majoring in computer science with minors in finance and Chinese.
                            </p>
                        </Transitions>
                        <Transitions>
                            <p className="mt-6 text-md leading-8 text-teal-800 font-sans">
                                Currently @ <span className="font-bold"> Warner Bros. Discovery</span>
                            </p>
                        </Transitions>
                        <Transitions>
                            <div className="mt-6 flex flex-col items-center gap-4">
                                    <a
                                        href="https://drive.google.com/file/d/1hS9QfuLECobOz6a95e6pDnyWUNKMw-PA/view?usp=sharing"
                                        className="rounded-md bg-cyan-50 px-3.5 py-2.5 text-sm text-black shadow-md hover:text-teal-800 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-sans"
                                        target="_blank"
                                    >
                                        Resume
                                    </a>
                                    <Link to="about" spy={true} smooth={true} offset={50} duration={1000} className="hover:cursor-pointer text-sm font-semibold font-sans leading-6 text-teal-700 hover:text-stone-600 transition-opacity mt-2">Learn More <span aria-hidden="true">→</span></Link>
                            </div>
                        </Transitions>
                    </div>
            </div>
        </div>
    )
}
