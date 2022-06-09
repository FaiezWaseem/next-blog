import React from 'react'
import Link from 'next/link'
import styles from "../styles/navbar.module.css"
export default function Navbar() {
  return (
    <div>
        <nav  className={styles.navbar}>
        <img src="https://v-point.000webhostapp.com/blog/img/logo.png" className="logo" alt="Logo"/>
        <ul className={styles.link_containars}>
          <Link href="/" >
            <li className="link-item"><a className={styles.link_a} >Home</a> </li>
          </Link>
          <Link href={"/blog"}>
            <li className="link-item"> <a  className={styles.link_a}>BLogs</a></li>
          </Link>
        </ul>
    </nav>
    </div>
  )
}
