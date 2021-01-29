import styles from "../styles/Common.module.css";
import Teamstyles from "../styles/Team.module.css";
import {FaFacebookSquare, FaInstagramSquare, FaLinkedin} from 'react-icons/fa';
import Image from "next/image";
import Link from "next/link";

const Profile = ({ image, link, name, position, textClass }) => {
return (
	<div>
	<Link href={link} target="_blank" rel="noreferrer noopener">
		<a className={Teamstyles.link}>
		<div className={Teamstyles.profile}>
			<img className={Teamstyles.image} src={image} alt="Profile picture" width={130} height={130} />
      <div className={textClass}>
        <h3 className={Teamstyles.nameText}>{name}</h3>
        <p className={Teamstyles.positionText}>{position}</p>
      </div>
    </div>
		</a>
	</Link>
	</div>
);
};

export default function Team() {
  return (
    <main className={Teamstyles.main}>
      <div className={Teamstyles.wrapper}>
        <div className={Teamstyles.grid}>
          <Profile
            image="/placeholder.jpg"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Dwaraknath Ravichandran"
            position="Director"
            textClass={`${Teamstyles.text} ${Teamstyles.red}`}
          />
          <Profile
            image="/placeholder.jpg"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="David Villafuerte"
            position="Director"
            textClass={`${Teamstyles.text} ${Teamstyles.blue}`}
          />
          <Profile
            image="/placeholder.jpg"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Joshua Bermudez"
            position="Operations Lead"
            textClass={`${Teamstyles.text} ${Teamstyles.yellow}`}
          />
          <Profile
            image="/placeholder.jpg"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Aneesh Sharma"
            position="Operations Lead"
            textClass={`${Teamstyles.text} ${Teamstyles.red}`}
          />
          <Profile
            image="/placeholder.jpg"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Carissa Lo"
            position="Marketing Lead"
            textClass={`${Teamstyles.text} ${Teamstyles.blue}`}
          />
          <Profile
            image="/placeholder.jpg"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Queenie Xu"
            position="Marketing Lead"
            textClass={`${Teamstyles.text} ${Teamstyles.yellow}`}
          />
          <Profile
            image="/placeholder.jpg"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Brandon To"
            position="Sponsorship Lead"
            textClass={`${Teamstyles.text} ${Teamstyles.red}`}
          />
          <Profile
            image="/placeholder.jpg"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Cammy Ngo"
            position="Sponsorship Lead"
            textClass={`${Teamstyles.text} ${Teamstyles.blue}`}
          />
          <Profile
            image="/placeholder.jpg"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Ajeet Kokatay"
            position="Web Dev Lead"
            textClass={`${Teamstyles.text} ${Teamstyles.yellow}`}
          />
          <Profile
            image="/placeholder.jpg"
            link="https://en.wikipedia.org/wiki/The_Mandalorian"
            name="Rajbir Johar"
            position="Web Dev Lead"
            textClass={`${Teamstyles.text} ${Teamstyles.red}`}
          />
        </div>

        <div className={Teamstyles.credits}>
          <div className={Teamstyles.col}>
            <ul>
              <h3 className={Teamstyles.committeeTitle}>Operations Committee</h3>
              <li>
                John Doe
              </li>
              <li>
                John Doe
              </li>
              <li>
                John Doe
              </li>
              <li>
                John Doe
              </li>
            </ul>
          </div>
          <div className={Teamstyles.col}>
            <ul>
              <h3 className={Teamstyles.committeeTitle}>Marketing Committee</h3>
              <li>
                John Doe
              </li>
              <li>
                John Doe
              </li>
              <li>
                John Doe
              </li>
              <li>
                John Doe
              </li>
            </ul>
          </div>
          <div className={Teamstyles.col}>
            <ul>
              <h3 className={Teamstyles.committeeTitle}>Sponsorship Committee</h3>
              <li>
                John Doe
              </li>
              <li>
                John Doe
              </li>
              <li>
                John Doe
              </li>
              <li>
                John Doe
              </li>
            </ul>
          </div>
          <div className={Teamstyles.col}>
            <ul>
              <h3 className={Teamstyles.committeeTitle}>Web Dev Committee</h3>
              <li>
                John Doe
              </li>
              <li>
                John Doe
              </li>
              <li>
                John Doe
              </li>
              <li>
                John Doe
              </li>
            </ul>
          </div>
        </div>

        <div className={Teamstyles.contactWrapper}>
          <div className={styles.contact}>
            <a href="https://www.facebook.com/UCRBioHack/"><FaFacebookSquare/></a>
            <a href="https://www.instagram.com/biohack_ucr/?hl=en"><FaInstagramSquare/></a>
            <a href="https://www.linkedin.com/company/biohackucr/"><FaLinkedin/></a>
          </div>
          <div className={styles.contactlink}>
            <a href="mailto:biohack.ucr@gmail.com">
              biohack.ucr@gmail.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
