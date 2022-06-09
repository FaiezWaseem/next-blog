import React from 'react';
import styles from "../styles/Header.module.css"
const Header = () => {
    return (
        <div>
            <header className={styles.header}>
        <div className="content">
            <h1 className={styles.heading}>
                <span className={styles.small}>welcome Hunter Coding</span>
                blog
                <span className={styles.no_fill}>writing</span>
            </h1>
            <a  className={styles.btn}>write a blog</a>
        </div>
    </header>
        </div>
    );
}

export default Header;
