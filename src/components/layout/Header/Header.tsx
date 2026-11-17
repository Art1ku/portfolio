import classes from "./Header.module.scss"

export default function Header() {


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
                    </div>
                </div>
            </div>
        </>
    )
}