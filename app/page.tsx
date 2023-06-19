'use client'

import Image from 'next/image'
import styles from './page.module.css'
import React, { useEffect } from "react"
import Layout from './index/layout'
import '@fontsource/roboto';
import '@fontsource/open-sans';
import Footer from './components/footer'

export default function Page() {

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
    <Layout>
      <div className="relative px-6 py-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00ffee] via-[#b9f8ff] to-[#0022ff]" style={{ mixBlendMode: "multiply", opacity: "0.4", zIndex: "-1" }} />
        <div className="mx-auto max-w-2xl h-screen sm:py-48 lg:py-56 ">
          <div className="text-center">
            <div className="flex items-center">
              <h1 className="text-4xl tracking-tight px-6 text-gray-900 sm:text-6xl">
                Hi! I&apos;m <b className="font-bold font-sans">Kathie</b>.
              </h1>
                <a className="cursor-default bg-black rounded-full hover:opacity-50 opacity-100 transition-opacity" href="https://www.linkedin.com/in/kathie-huang" target="_blank">
                  <ProfilePic />
                </a>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-600 font-sans">
              I am a third-year college student at Duke University planning on
              majoring in computer science with minors in finance and Chinese.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://drive.google.com/file/d/1hS9QfuLECobOz6a95e6pDnyWUNKMw-PA/view?usp=sharing"
                className="rounded-md bg-cyan-50 px-3.5 py-2.5 text-sm text-black shadow-md hover:text-teal-800 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-sans"
                target="_blank"
              >
                Resume
              </a>
              <a href="/about" className="text-sm font-semibold font-sans leading-6 text-teal-700 hover:text-stone-600 transition-opacity">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Layout>
  )
}
