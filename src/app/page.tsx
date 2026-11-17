import classes from "./page.module.scss"
import MainPage from "@/components/pagesComp/MainPage/MainPage"

export default function Home() {
  return (
    <div className={classes.page}>
      <main className={classes.main}>
        <MainPage />
      </main>
    </div>
  );
}
