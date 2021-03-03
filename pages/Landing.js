import Image from "next/image";
import styles from "../styles/Common.module.css";
import Landingstyles from "../styles/Landing.module.css";
import { Link, animateScroll as scroll } from "react-scroll";
import dynamic from "next/dynamic";

const SignUpButton = dynamic(
  () =>
    import("../components/SignUpButton").catch((err) => {
      return () => <p>oops... this failed to load</p>;
    }),
  { ssr: false }
);

export default function Landing() {
  return (
    <main className={Landingstyles.main}>
      <div className={Landingstyles.wrapper}>
        <div className={Landingstyles.logo}>
          <Image
            src="/logos/black-1-trans.png"
            alt="Biohack logo"
            width={150}
            height={150}
          />
        </div>
        <div className={Landingstyles.text}>
          <h2 className={Landingstyles.subtitle}>Welcome to ~</h2>
          <h1 className={Landingstyles.title}>BIOHACK 2021</h1>
          <p className={Landingstyles.caption}>Healthcare Hackathon</p>
          <p className={Landingstyles.date}>May 15-16, 2021</p>
        </div>
      </div>
      <div className={`${styles.grid} ${Landingstyles.grid}`}>
        {/* Uncomment when applications go live est. Feb 22 */}
        {/* <a href="https://nextjs.org/docs" className={`${styles.card} ${Landingstyles.card}`}>
          <h3>Sign Up! &rarr;</h3>
        </a> */}
        <SignUpButton />

        <Link
          to="Hero"
          spy={true}
          smooth={true}
          duration={500}
          activeClass="active"
          className={`${styles.card} ${styles.wiggle}  ${Landingstyles.card}`}
        >
          <h3>Learn More &rarr;</h3>
        </Link>
      </div>
    </main>
  );
}
