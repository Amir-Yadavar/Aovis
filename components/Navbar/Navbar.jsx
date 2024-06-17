import Link from "next/link";
import styles from "@/styles/navbar.module.css";
import { RiMovie2Fill } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <header className={styles.header}>
      {/* navbar in large */}
      <div className="d-flex align-items-center">
        <span className="d-flex">
          <RiMovie2Fill />
        </span>
        <h2>aovis</h2>
      </div>

      <nav className={styles.navbar}>
        <Link href={""} className={styles.navItem}>
          Home
        </Link>
        <Link href={""} className={styles.navItem}>
          Movies
        </Link>
        <Link href={""} className={styles.navItem}>
          Events
        </Link>
        <Link href={""} className={styles.navItem}>
          Pages
        </Link>
        <Link href={""} className={styles.navItem}>
          News
        </Link>
        <Link href={""} className={styles.navItem}>
          Contact
        </Link>
      </nav>

      <div className="d-flex align-items-center">
        <span className={styles.iconNav}>
          <FaSearch />
        </span>
        <span className={styles.iconNav}>
          <FiUser />
        </span>
      </div>
    </header>
  );
}

export default Navbar;
