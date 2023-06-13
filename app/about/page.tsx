import React from "react";
import Link from 'next/link'
import Layout from '../index/layout'
import styles from '../page.module.css'

export default function Page() {
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
                <div className="container mx-auto items-center justify-center md:justify-between px-4">
                    <h1 className="text-4xl font-bold mb-5 w-[180px] mx-auto mt-2 text-center">About Me</h1>
                    <div className="text-center">
                        <p className="pb-5 font-medium">
                            Hi there! My name is Kathie. I&apos;m from Renton, WA, but I go to school in North Carolina, and I will be in Spain this fall!
                        </p>
                        <p className="pb-5 font-medium">
                            I am an aspiring software engineer with interests lying in both technology and business, and I hope to bridge these two passions in the future.
                        </p>
                        <p className="pb-5 font-medium">
                            I&apos;ve had a long history of different types of professional experience, so here we go...
                        </p>
                    </div>
                    <h1 className="text-2xl font-bold mb-5 w-[180px] mx-auto text-center">Experience</h1>
                    <div className="container mx-auto grid md:grid-cols-2 gap-10">
                        <div className="grid-rows-2">
                            <div><strong>Warner Bros. Discovery</strong></div>
                            <div><small>June 2023 - Present</small></div>
                        </div>
                        <p>As a software engineering intern at WBD, I will be working on metadata management and publishing workflow for the direct to consumer product.</p>
                        <div className="grid-rows-2">
                            <div><strong>Ford Motor Company</strong></div>
                            <div><small>May 2022 - Aug 2022</small></div>
                        </div>
                        <p>At Ford, I worked as a software engineering intern to consolidate Ford developer portals using Spotify&apos;s Backstage.io.
                            I built plugins using React and peer-programmed with other interns and my team, and I learned a lot about production development and the importance of collaboration in programming.
                        </p>
                        <div className="grid-rows-2">
                            <div><strong>Amazon Fresh</strong></div>
                            <div><small>June 2021 - Aug 2021</small></div>
                        </div>
                        <p>After graduating high school, I spent the summer in the kitchen at the newly opened Amazon Fresh in Factoria, WA with consistent 4am shifts where I prepped, packaged, and labeled various different food products.</p>
                        <div className="grid-rows-2">
                            <div><strong>American Assocation of University Women</strong></div>
                            <div><small>July 2021</small></div>
                        </div>
                        <p>I worked as a virtual teaching assistant/camp counselor for AAUW&apos;s Tech Trek camp, teaching 200+ 7th grade females about science and technology.
                            We built mini apps using the MIT App Inventor, made binary bracelets, and decrypted codes!
                        </p>
                        <div className="grid-rows-2">
                            <div><strong>Subway</strong></div>
                            <div><small>Aug 2018 - Feb 2020</small></div>
                        </div>
                        <p className="mb-5">I got my first ever job as soon as I turned 15 at the Subway store near my high school.
                            My main goal was to make enough money to buy myself a new laptop and free myself from the 10+ yr old piece of junk I previously had, but I learned a lot working here for almost two years.
                            I would prep foods, wipe tables, sweep the floor, clean the bathrooms, throw out the trash and recycling, and operate the cash register.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}