import Navstyles from "../styles/Nav.module.css";
import {
  Link,
  animateScroll as scroll,
} from "react-scroll";
import styled from "@emotion/styled";

const StickyNav = styled.nav`
  position: fixed;
  z-index: 5;
  top: 0;
  right: 0;
  margin:0;
  padding: 1.4rem 1rem 1rem;
  min-width: 100%;
  background-color:#fff;
`;

export function Nav() {
  return (
    <StickyNav>
        <ul className={Navstyles.navlistcontainer}>
          <li className={Navstyles.navlistlink + ' ' + Navstyles.home}>
            <Link 
              to="Home"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              className="link"
            >
              Home
            </Link>
          </li>
          <li className={Navstyles.navlistlink + ' ' + Navstyles.winners}>
            <Link
              to="PastWinners"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              className="link"
            >
              Winners
            </Link>
          </li>
          <li className={Navstyles.navlistlink + ' ' + Navstyles.faq}>
            <Link
              to="Questions"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              className="link"
            >
              Faq
            </Link>
          </li>
          <li className={Navstyles.navlistlink + ' ' + Navstyles.help}>
            <Link
              to="Help"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              className="link"
            >
              Help
            </Link>
          </li>
          <li className={Navstyles.navlistlink + ' ' + Navstyles.sponsors}>
            <Link
              to="Sponsors"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              className="link"
            >
              Sponsors
            </Link>
          </li>
        </ul>
    </StickyNav>
  );
}
