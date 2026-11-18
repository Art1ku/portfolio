'use client'
import classes from "./Header.module.scss"
import { useState, useEffect } from "react";

export default function Header() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
        setIsDark(true);
        document.documentElement.setAttribute('data-theme', 'dark');
        }
    }, []);

   const toggleTheme = () => {
        setIsDark((prev) => {
            const next = !prev;
            const root = document.documentElement;

            if (next) {
                root.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                root.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
            }

            return next;
        });
    };

    return(
        <>
            <div className={classes.wrapper}>
                <div className={classes.insideWrapper}>
                    <div className={classes.leftPart}>
                        <a href="#" className={classes.linkWrap}>
                            <div className={classes.avatar}>
                                <p className={classes.avatarPL}>A</p>
                                <p className={classes.avatarPR}>I</p>
                                <div className={classes.logo} />
                            </div>
                        </a>
                    </div>

                    <div className={classes.rightPart}>
                        <div className={classes.navbar}>
                            <a href="#about" className={classes.link}>about me</a>
                            <a href="#stack" className={classes.link}>my stack</a>
                            <a href="#projects" className={classes.link}>projects</a>
                            <a href="#learning" className={classes.link}>learning</a>
                            <a href="#contact" className={classes.link}>contact</a>
                        </div>

                        <div
                            className={`${classes.themeSwitch} ${isDark ? classes.dark : ''}`}
                            onClick={toggleTheme}
                            role="button"
                            tabIndex={0}
                            aria-label="Toggle theme"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                toggleTheme();
                                }
                            }}
                            >
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}