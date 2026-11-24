import classes from "./Footer.module.scss";
import Container from "../Container/Container";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className={classes.wrapper}>
            <Container>
                <div className={classes.insideWrapper}>
                    <div className={classes.left}>
                        <button className={classes.topUpButton}>
                            <a href="#" className={classes.topUpP}>Top up</a>
                            <div className={classes.topArrow} />
                        </button>
                    </div>

                    <div className={classes.center}>
                        <div className={classes.top}>
                            <div className={classes.logo} />
                            <p className={classes.titleP}>ALIHAN ISKENDERBEKOV</p>
                        </div>

                        <div className={classes.bottom}>
                            <div className={classes.linkIconsBar}>
                                <a href="#" className={classes.whatsapp} aria-label="WhatsApp" />
                                <a href="#" className={classes.linked} aria-label="LinkedIn" />
                                <a href="#" className={classes.telegram} aria-label="Telegram" />
                                <a href="#" className={classes.github} aria-label="GitHub" />
                            </div>
                        </div>
                    </div>

                    <div className={classes.right}>
                        <p className={classes.license}>
                            © 2026 Alihan Iskenderbekov. All rights reserved.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}