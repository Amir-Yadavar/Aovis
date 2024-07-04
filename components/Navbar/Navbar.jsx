"use client";

import Link from "next/link";
import styles from "@/styles/navbar.module.css";
import { RiMovie2Fill } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { useRef, useState } from "react";

function Navbar() {
  const [isShowNavMob, setIsShowNavMob] = useState(false);

  const navMobConRef = useRef();

  // toggleNavMobHandler
  const toggleNavMobHandler = () => {
    setIsShowNavMob(true);

    navMobConRef.current.style.transform = "translateX(0%)";
  };

  // containerNavClickHandler
  const containerNavClickHandler = ()=>{
    setIsShowNavMob(false)
    navMobConRef.current.style.transform = "translateX(-100%)";
  }

  return (
    <header className={styles.header}>
      <Link href={"/"} className="d-flex align-items-center">
        <span className={styles.logo}>
          <RiMovie2Fill />
        </span>
        <h2 className={styles.logoTitle}>aovis</h2>
      </Link>

      {/* navbar in large */}
      <div className="d-none d-md-block">
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
      </div>

      {/* navbar in mobile */}
      <div className={styles.navMobContainer} ref={navMobConRef} onClick={containerNavClickHandler}>
        <div>
        <nav className={styles.navbarMob}>
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
        </div>
      </div>

      <div className="d-flex align-items-center">
        <span className={styles.iconNav}>
          <IoIosSearch />
        </span>
        <Link href={""} className={styles.iconNav}>
          <FiUser />
        </Link>
        <div className="d-md-none" onClick={toggleNavMobHandler}>
          <span className={styles.iconNav}>
            <CgMenuGridO />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
