import Link from "next/link";
import Logo from "./Logo";
import classes from "./navbar.module.css";

const NavBar = () => {
  return (
    <header className={classes.header}>
      <Link href={"/"}>
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href={"/posts"}>Posts</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
