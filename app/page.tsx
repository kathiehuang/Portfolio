'use client'

import Image from 'next/image';
import styles from './page.module.css';
import React, { useEffect } from "react";
import Layout from './index/layout';
import '@fontsource/roboto';
import '@fontsource/open-sans';
import Footer from './components/footer';
import HomePage from './components/home';
import AboutMePage from './components/about';
import ProjectsPage from './components/projects';

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
        <div className="absolute inset-0 bg-emerald-100" style={{ mixBlendMode: "multiply", opacity: "1", zIndex: "-1" }} />
        <HomePage />
        <AboutMePage />
        <ProjectsPage />
      <Footer />
      </div>
    </Layout>
  )
}
