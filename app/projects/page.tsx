'use client'

import React from "react";
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../index/layout'
import { useState } from 'react'
import styles from '../page.module.css'

export default function Page() {

    const MusicMapPic = () => (
        <Image
            src="/images/musicmap.png" // Route of the image file
            height={322} // Desired size with correct aspect ratio
            width={450} // Desired size with correct aspect ratio
            alt="Music Map"
            className="rounded-3xl"
        />
    );

    const HaplotypePic = () => (
        <Image
            src="/images/haplotype.png" // Route of the image file
            height={322} // Desired size with correct aspect ratio
            width={450} // Desired size with correct aspect ratio
            alt="Haplotype Calling Pipeline"
            className="rounded-3xl"
        />
    );

    const awards = [
        {
            title: "Ford Technology & Software Platform Intern Innovation Challenge Winner",
            date: "Aug 2022",
            description: "Won Best in Show in Ford's annual intern competition after devising a new feature, the Driving Insights platform, which would give a driver insight into their driving performance and enable parental supervision over their children's driving using those insights, and presenting the proposal to judges and Ford executives."
        },
        {
            title: "Issaquah School District CTE & Computer Science Student of the Year",
            date: "Jun 2021",
            description: "Selected by Issaquah School District staff"
        },
        {
            title: "Liberty High School CTE - Computer Science Student of the Year",
            date: "Jun 2021",
            description: "Selected by Liberty High School teachers"
        },
        {
            title: "Washington State Honors Award Recipient",
            date: "Jun 2021",
            description: "Top 10% of Washington's high school graduating class of 2021"
        },
        {
            title: "National Merit Scholar",
            date: "May 2021",
            description: ""
        },
        {
            title: "Science Olympiad State Medalist",
            date: "Apr 2021",
            description: "Placed 2nd for the Code Analysis event in the WA Science Olympiad State Competition"
        },
        {
            title: "DECA State Career Development Conference 9-Time Qualifier",
            date: "Jan 2021",
            description: "Qualified to DECA State a total of 9 times in 4 years"
        },
        {
            title: "Congressional App Challenge Winner ",
            date: "Dec 2020",
            description: "“Most prestigious prize in student computer science.” Each winning app is put on display in the U.S. Capitol Building for one year and featured on the House of Representatives’ website. Winning students are also invited to the #HouseofCode Capitol Hill Reception in Washington, D.C, and awarded $100 in Amazon Web Service credits and a $75 Southwest Airlines gift card. My two teammates and I won after submitting an app called HealthNut to WA District 08 and meeting Representative Kim Schrier."
        },
        {
            title: "Rotary Student of the Month",
            date: "Oct 2020",
            description: "Selected by the Liberty High School Math Department for achievement in mathematics"
        },
        {
            title: "Jumpstart EdTech Hackathon 3rd for Best Tech",
            date: "Aug 2020",
            description: "Developed and submitted Chatter, a student video-chatting app, winning $100 and office hours with industry professionals."
        },
        {
            title: "National AP Scholar",
            date: "Jul 2020",
            description: "Granted to students in the United States who received an average score of at least 4 on all AP exams taken, and scores of 4 or higher on eight or more of these exams."
        },
        {
            title: "DECA International Career Development Conference Qualifier",
            date: "Mar 2020",
            description: "Sports & Entertainment Operations Research Event (top 3 at State)"
        },
        {
            title: "American Association of University Women Certificate of Excellence in Technology",
            date: "Jan 2020",
            description: "1 of 3 female juniors at Liberty High School selected by staff to be recognized as excelling in areas of science, technology, engineering, and/or mathematics (STEM)."
        },

    ];

    const [activeAward, setActiveAward] = useState(null);

    const handleAwardClick = (index) => {
        setActiveAward(index === activeAward ? null : index);
    }

    return (
        <Layout>
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto items-center justify-center md:justify-between px-4">
                    <h1 className="text-4xl font-bold mb-5 w-[180px] justify-center flex content-center text-center mx-auto mt-2">Projects</h1>
                    <div className="container mx-auto grid md:grid-cols-2 gap-10">
                        <div className="grid-rows-3">
                            <div><strong className="justify-center flex">Music Map</strong></div>
                            <div><small className="justify-center flex">Sep 2022 - Jan 2022</small></div>
                            <div className="flex justify-center mt-2"><a href="https://github.com/nyu12345/MusicMap" target="_blank"><MusicMapPic /></a></div>
                        </div>
                        <p className="items-center flex text-center">Music Map was a class project I worked on with a team of 6 for my Database Systems class.
                            Together, we developed a React Native application using MongoDB for the backend that allows users to track songs played and memories made during road trips.
                            I designed and implemented a friendship request system and added a search feature to find friends by name and Spotify username.
                            I also worked on creating the frontend and backend for the app&apos;s profile page, which performs API calls to authenticate users via Spotify login and displays the user&apos;s Spotify information, including their profile picture, number of friends, and sent and received requests.</p>
                    </div>
                    <div className="container mx-auto grid md:grid-cols-2 gap-10 mt-8">
                        <div className="grid-rows-3">
                            <div><strong className="justify-center flex">Haplotype Calling Pipeline</strong></div>
                            <div><small className="justify-center flex">Jan 2022 - May 2023</small></div>
                            <div className="flex justify-center mt-2"><a href="https://github.com/kathiehuang/haplotype_calling_pipeline" target="_blank"><HaplotypePic /></a></div>
                        </div>
                        <p className="items-center flex text-center">I worked as a student researcher at the Duke Malaria Collaboratory for around a year and a half during the school year, building a bioinformatic pipeline using the workflow management system Snakemake.
                            The pipeline takes in raw data and outputs relevant sample-level haplotype information.
                            I also got the opportunity to use the pipeline I developed to analyze the correlation of drug-resistance allele frequencies in children and different pools of pregnant women located in regions of Mozambique.
                            For the work I have done at the Malaria Collaboratory, I will be listed as a second author for one of the Post-doctoral Associate&apos;s manuscripts, which I am super excited about!</p>
                    </div>
                </div>
                <div className="mx-auto items-center justify-center md:justify-between mt-8 px-4 container">
                    <h1 className="text-xl font-bold mb-3 text-center">Awards and Honors</h1>
                    <div className="flex justify-center">
                        <ul className="mx-auto text-left max-w-screen-lg">
                            {awards.map((award, index) => (
                                <li
                                    key={index}
                                    className={`py-3 relative transition-colors duration-300 ${activeAward === index ? 'bg-blue-100' : ''}`}
                                    onMouseEnter={() => handleAwardClick(index)}
                                    onMouseLeave={() => handleAwardClick(index)}
                                    onClick={() => handleAwardClick(index)}
                                >
                                    <span className="cursor-default">{award.date} - {award.title}</span>
                                    <div className="fixed bottom-10 right-10">
                                        {activeAward !== null && (
                                            <div className="text-xs bg-blue-50 rounded-lg p-2 max-w-xs">
                                                <p className="text-gray-800 overflow-hidden overflow-ellipsis">{awards[activeAward].description}</p>
                                            </div>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
    )
}