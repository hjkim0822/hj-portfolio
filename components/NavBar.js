import navStyles from "../styles/NavBar.module.css";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/insert_logo_here.png";

const NavBar = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Image src={logo} alt="insert logo here" width={200} height={50} />
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/main">Main</Link>
        </li>
        <li>
          <Link href="/game">Game</Link>
        </li>
        <li>
          <Link href="/music">Music</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
