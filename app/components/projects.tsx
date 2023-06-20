'use client'

import React from "react";
import Image from 'next/image'
import { useState } from 'react'
import styles from '../page.module.css'
import '@fontsource/open-sans';
import '@fontsource/roboto'
import Transitions from "./transitions";

export default function ProjectsPage() {

    const projects = [
        {
            name: "MusicMap",
            duration: "Sep 2022 - Jan 2022",
            link: "https://github.com/nyu12345/MusicMap",
            description: "Music Map was a class project I worked on with a team of 6 for my Database Systems class. Together, we developed a React Native application using MongoDB for the backend that allows users to track songs played and memories made during road trips. I designed and implemented a friendship request system and added a search feature to find friends by name and Spotify username. I also worked on creating the frontend and backend for the app&apos;s profile page, which performs API calls to authenticate users via Spotify login and displays the user&apos;s Spotify information, including their profile picture, number of friends, and sent and received requests",
            imageSrc: "/images/musicmap.png",
            alt: "Music Map"
        },
        {
            name: "Haplotype Calling Pipeline",
            duration: "Jan 2022 - May 2023",
            link: "https://github.com/kathiehuang/haplotype_calling_pipeline",
            description: "I worked as a student researcher at the Duke Malaria Collaboratory for around a year and a half during the school year, building a bioinformatic pipeline using the workflow management system Snakemake. The pipeline takes in raw data and outputs relevant sample-level haplotype information. I also got the opportunity to use the pipeline I developed to analyze the correlation of drug-resistance allele frequencies in children and different pools of pregnant women located in regions of Mozambique. For the work I have done at the Malaria Collaboratory, I will be listed as a second author for one of the Post-doctoral Associate&apos;s manuscripts, which I am super excited about!",
            imageSrc: "/images/haplotype.png",
            alt: "Haplotype Calling Pipeline"
        }
    ]

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
        <div className="relative isolate px-6 pt-14 lg:px-8" id='projects'>
            <div className="mx-auto items-center justify-center md:justify-between px-4">
                <Transitions>
                    <h1 className="text-4xl font-bold w-[180px] justify-center flex content-center text-center mx-auto mt-2 font-mono">Projects</h1>
                </Transitions>
                <div>
                    {projects.map((project, index) => (
                        <Transitions key={index}>
                            <div className="container mx-auto grid md:grid-cols-2 gap-10 pt-4">
                                <div className="grid-rows-3">
                                    <div><strong className="justify-center flex font-mono">{project.name}</strong></div>
                                    <div><small className="justify-center flex font-mono">{project.duration}</small></div>
                                    <div className="flex justify-center mt-2 hover:opacity-70 transition-all"><a href={project.link} target="_blank">        <Image
                                        src={project.imageSrc}
                                        height={322}
                                        width={450}
                                        alt={project.alt}
                                        className="rounded-3xl"
                                    /></a></div>
                                </div>
                                <p className="items-center flex text-center font-sans">{project.description}</p>
                            </div>
                        </Transitions>
                    ))}
                </div>
            </div>
            <div className="mx-auto items-center justify-center md:justify-between mt-8 px-4 container" id='awards'>
                <Transitions>
                    <h1 className="text-xl font-bold mb-3 text-center font-mono">Awards and Honors</h1>
                </Transitions>
                <Transitions>
                    <div className="flex justify-center font-sans">
                        <ul className="mx-auto text-left max-w-screen-lg">
                            {awards.map((award, index) => (
                                <li
                                    key={index}
                                    className={`py-3 px-4 relative transition-colors duration-300 rounded-md ${activeAward === index ? 'bg-sky-200' : ''}`}
                                    onMouseEnter={() => handleAwardClick(index)}
                                    onMouseLeave={() => handleAwardClick(index)}
                                    onClick={() => handleAwardClick(index)}
                                >
                                    <span className="cursor-default">{award.date} - {award.title}</span>
                                    <div className="fixed bottom-10 right-10">
                                        {activeAward !== null && (
                                            <div className="text-xs bg-sky-200 rounded-lg p-2 max-w-xs">
                                                <p className="text-gray-800 overflow-hidden overflow-ellipsis">{awards[activeAward].description}</p>
                                            </div>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Transitions>
            </div>
        </div>
    )
}