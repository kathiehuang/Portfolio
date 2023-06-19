import React from "react";
import Link from 'next/link'
import Layout from '../index/layout'
import styles from '../page.module.css'
import '@fontsource/open-sans';
import '@fontsource/roboto';
import Footer from "../components/footer";

export default function Page() {
    return (
        <Layout>
            <div className="min-h-screen flex flex-col justify-center items-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00ffee] via-[#b9f8ff] to-[#0022ff]" style={{ mixBlendMode: "multiply", opacity: "0.4", zIndex: "-1" }} />
                <div className="container mx-auto flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold mb-5 w-[180px] mt-2 text-center font-mono">Contact</h1>
                    <p className="text-sm flex justify-center font-sans">
                        <Link href="https://www.linkedin.com/in/kathie-huang">LinkedIn</Link>
                        <Link href="https://github.com/kathiehuang">GitHub</Link>
                        <Link href="mailto:kathiehuang@hotmail.com">Email</Link>
                    </p>
                </div>
                <Footer />
            </div>
        </Layout>
    )
}
