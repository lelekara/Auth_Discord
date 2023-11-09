import Head from "next/head";


import styles from "./index.module.css";
import ButtonsLogin from "./api/modules/buttonConnect";
import NavBar from "./api/modules/navBar";
import ButtonsLogout from "./api/modules/buttonLogout";


export default function Home() {
  return (
    <>
      <NavBar />
      <Head>
        <title>Discord auth</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Discord <span className={styles.pinkSpan}>Auth</span>
          </h1>
          <div className={styles.cardRow}>
              <ButtonsLogin />
              <ButtonsLogout />
          </div>
        </div>
      </main>
    </>
  );
}
