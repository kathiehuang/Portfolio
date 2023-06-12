import React from "react";
import Link from 'next/link'
import Layout from '../index/layout'
import styles from '../page.module.css'

export default function Page() {
    return (
        <Layout>
            <main className={styles.main}>
                <h1>Hello, Projects page!</h1>
                <h2>
                    <Link href="/">Back to home</Link>
                </h2>
            </main>
        </Layout>
    )
}