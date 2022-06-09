import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Card from "../components/Card"
import Navbar from "../components/navbar"
import Header from "../components/Header"


export default function Home({data}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunter Coding Blog </title>
        <meta name="description" content="My Hunter BLog Post " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <Navbar />
     <Header />
      <main className={styles.main}>
        <div className={styles.grid}>
          {data.map((value , key) => <Card  key={key} post={value} /> )}
         

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          style={{ fontWeight : "bold"}}
        >
          Hunting Coder { new Date().getFullYear()}
        </a>
      </footer>
    </div>
  )
}


export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/post`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
