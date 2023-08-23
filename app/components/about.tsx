import React from "react";
import styles from "../page.module.css";
import "@fontsource/open-sans";
import "@fontsource/roboto";
import CompanyBubble from "./companyBubble";
import Transitions from "./transitions";

const surroundingBubbles = [
    {
        companyName: "Ford Motor Company",
        duration: "May 2022 - Aug 2022",
        description:
            "At Ford the summer after freshman year of college, I worked as a software engineering intern to consolidate Ford developer portals using Spotify's Backstage.io. I built plugins using React and peer-programmed with other interns and my team, and I learned a lot about production development and the importance of collaboration in programming.",
        imageSrc: "/images/ford.png"
    },
    {
        companyName: "Amazon Fresh",
        duration: "June 2021 - Aug 2021",
        description:
            "After graduating high school, I spent the summer in the kitchen at the newly opened Amazon Fresh in Factoria, WA. I was the youngest one and had 4am shifts nearly every day where I prepped, packaged, and labeled various different food products.",
        imageSrc: "/images/amazonfresh.png"
    },
    {
        companyName: "Subway",
        duration: "Aug 2018 - Feb 2020",
        description:
            "I got my first job the summer after my freshman year of high school by walking 30 minutes from my house with a resume in hand to the nearest Subway. My main goal was to make enough money to buy myself a new laptop and free myself from the 10+ yr old piece of junk I previously had, but I learned a lot working here for almost two years. I would prep foods, wipe tables, sweep the floor, clean the bathrooms, throw out the trash and recycling, and operate the cash register, serving and working with people of all ages and backgrounds.",
        imageSrc: "/images/subway.png"
    },
    {
        companyName: "American Association of University Women",
        duration: "July 2021",
        description:
            "I worked as a virtual teaching assistant/camp counselor for AAUW's Tech Trek camp, teaching 200+ 7th-grade females about science and technology. We built mini apps using the MIT App Inventor, made binary bracelets, and decrypted codes!",
        imageSrc: "/images/aauw.jpg"
    },
];

const mainBubble = {
    companyName: "Warner Bros. Discovery",
    duration: "June 2023 - Present",
    description:
        "As a software engineering intern at WBD this summer, I worked on metadata management and publishing workflow for the direct-to-consumer product, building two internal command-line tools using Go to migrate content between production and stage environments for quality assurance testing to improve the monetized playback experience of Max customers (lol). It was really cool immersing myself into the work environment, exploring all the different parts of the company, and thinking about where I want to be 10 years from now. I learned something new every day, whether it was from working on my project, attending an intern event, having a coffee chat with a product manager I reached out to, or even just making post-standup small talk with someone on my team. The insights I've gained from this internship will continue to guide me as I begin my journey as a software engineer, and I'm super excited for what's to come in my career.",
    imageSrc: "/images/warnerbros.jpg"
};

export default function AboutMePage() {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8" id='about'>
            <div>
                <Transitions>
                    <h1 className="text-4xl font-bold mb-5 w-[180px] mx-auto mt-2 text-center font-mono">
                        About Me
                    </h1>
                </Transitions>
                <div className="text-center font-sans">
                    <Transitions>
                        <p className="pb-5 font-medium ">
                            Hi there! My name is Kathie. I&apos;m from Renton, WA, but I go to school in North Carolina, and I will be in Spain this fall!
                        </p>
                    </Transitions>
                    <Transitions>
                        <p className="pb-5 font-medium">
                            I am an aspiring software engineer with interests lying in both technology and business, and I hope to bridge these two passions in the future.
                        </p>
                    </Transitions>
                    <Transitions>
                        <p className="pb-5 font-medium">
                            I&apos;ve had a long history of different types of professional experience, so here we go...
                        </p>
                    </Transitions>
                </div>
            </div>
            <div className="pb-16"></div>
            <Transitions>
                <h1 className="text-2xl font-bold mb-5 w-[180px] mx-auto text-center font-mono">
                    Experience
                </h1>
            </Transitions>
            <Transitions>
                <div className="grid grid-cols-1 md:grid-cols-3 pt-8 md:pt-0" id='experience-section'>
                    <div className="md:col-span-1 grid md:grid-rows-3">
                        <div className="mb-4 md:mb-2">
                            <CompanyBubble
                                companyName={surroundingBubbles[0].companyName}
                                duration={surroundingBubbles[0].duration}
                                description={surroundingBubbles[0].description}
                                imageSrc={surroundingBubbles[0].imageSrc}
                            />
                        </div>
                        <div className="hidden md:block"></div>
                        <div className="mt-4 md:mt-0">
                            <CompanyBubble
                                companyName={surroundingBubbles[3].companyName}
                                duration={surroundingBubbles[3].duration}
                                description={surroundingBubbles[3].description}
                                imageSrc={surroundingBubbles[3].imageSrc}
                            />
                        </div>
                    </div>
                    <div className="col-span-1 flex md:row-span-1 justify-center">
                        <CompanyBubble
                            companyName={mainBubble.companyName}
                            duration={mainBubble.duration}
                            description={mainBubble.description}
                            imageSrc={mainBubble.imageSrc}
                            isMain={true}
                        />
                    </div>
                    <div className="md:col-span-1 grid md:grid-rows-3">
                        <div className="mb-4 md:mb-2">
                            <CompanyBubble
                                companyName={surroundingBubbles[1].companyName}
                                duration={surroundingBubbles[1].duration}
                                description={surroundingBubbles[1].description}
                                imageSrc={surroundingBubbles[1].imageSrc}
                            />
                        </div>
                        <div className="hidden md:block"></div>
                        <div className="mt-4 md:mt-0">
                            <CompanyBubble
                                companyName={surroundingBubbles[2].companyName}
                                duration={surroundingBubbles[2].duration}
                                description={surroundingBubbles[2].description}
                                imageSrc={surroundingBubbles[2].imageSrc}
                            />
                        </div>
                    </div>
                    <div className="py-12"></div>
                </div>
            </Transitions>
        </div>
    );
}