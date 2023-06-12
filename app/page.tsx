'use client'

import Image from 'next/image'
import styles from './page.module.css'
import React from "react"
import Layout from './index/layout'

export default function Page() {

  const ProfilePic = () => (
    <Image
      src="/images/profile.jpeg" // Route of the image file
      height={120} // Desired size with correct aspect ratio
      width={120} // Desired size with correct aspect ratio
      alt="Kathie Huang"
    />
  );

  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            hey&nbsp;
            <code className={styles.code}>shawty</code>
          </p>
          <div>
            <a
              href="mailto: kathiehuang@hotmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              by Kathie Huang
            </a>
          </div>
        </div>
        <div style={{ borderRadius: '50%', overflow: 'hidden' }}>
          <ProfilePic />
        </div>
        <div className="max-w-sm mx-auto flex items-center space-x-4">
          <p>Hello, I'm <b className="text-xl">Kathie.</b> I'm a third-year college student at Duke University planning on majoring in computer science and minoring in finance and Chinese.</p>
        </div>
        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
          </a>
          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>Explore the Next.js 13 playground.</p>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </Layout>
  )
}
