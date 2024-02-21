import Head from "next/head";
import styles from "./home.module.scss";
import SubScribeButton from "@/components/SubScribeButton";
export default function Home() {
  return (
    <>
      <Head>
        <title> Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get acess to all the publications <br />
            <span className={styles.priceSpan}> for $9.90 month</span>
          </p>
        <SubScribeButton/>
        </section>
        <img src="/images/mulher.svg" alt="GirlCoding" />


      </main>
    </>
  );
}
