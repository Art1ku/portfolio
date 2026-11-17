import classes from "./MainPage.module.scss"
import Header from "@/components/layout/Header/Header"
import Footer from "@/components/layout/Footer/Footer"
import Container from "@/components/layout/Container/Container"
import HelloSection from "../HelloSection/HelloSection"
import AboutSection from "../AboutSection/AboutSection"
import MyStackSection from "../MyStackSection/MyStackSection"
import ProjectsSection from "../ProjectsSection/ProjectsSection"
import LearningSection from "../LearningSection/LearningSection"
import ContactSection from "../ContactSection/ContactSection"


export default function MainPage() {

    return(
        <>
            <div className={classes.wrapper}>
                <div className={classes.insideWrapper}>
                    <div className={classes.HeaderWrapper}>
                        <Header />
                    </div>
                    <div className={classes.ContentWrapper}>

                    <div className={classes.HelloSection}>
                        <HelloSection />
                    </div>

                    <div id="about" className={classes.AboutWrapper}>
                        <AboutSection />
                    </div>

                    <div id="stack" className={classes.MyStackWrapper}>
                        <MyStackSection />
                    </div>

                    <div id="projects" className={classes.ProjectsWrapper}>
                        <ProjectsSection />
                    </div>

                    <div id="learning" className={classes.LearningWrapper}>
                        <LearningSection />
                    </div>

                    <div id="contact" className={classes.ContactWrapper}>
                        <ContactSection />
                    </div>

                    </div>
                    <div className={classes.FooterWrapper}>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}