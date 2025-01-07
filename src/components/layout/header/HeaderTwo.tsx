import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "public/images/logo.png";
import Offcanvas from "./Offcanvas";

interface HeaderProps {
  openNav: boolean;
  setOpenNav: (value: boolean) => void;
  handleNav: () => void;
}

const HeaderTwo = ({ openNav, handleNav, setOpenNav }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const defaultClasses = "primary-navbar cmn-nav";

  const combinedClasses = `${
    scrolled ? " navbar-active" : " "
  } ${defaultClasses}`;

  let logoSrc = logo;


  return (
    <>
      <header className="header">
        <div className={combinedClasses}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <nav className="navbar p-0">
                  <div className="navbar__logo">
                    <Link href="/" aria-label="go to home">
                      <Image src={logoSrc} priority alt="Image" />
                    </Link>
                  </div>
                  <div className="navbar__menu">
                    <ul>
                      <li className="navbar__item nav-fade navbar__item-first">
                        <Link href="/">HOME</Link>
                      </li>
                      <li className="navbar__item nav-fade">
                        <Link href="about-us">ABOUT US </Link>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                            aria-label="dropdown menu"
                            className="navbar__dropdown-label"
                        >
                          Services
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="our-services">Our Services</Link>
                          </li>
                          <li>
                            <Link href="service-single">Service Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                            aria-label="dropdown menu"
                            className="navbar__dropdown-label"
                        >
                          Projects
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="our-projects">Our Projects</Link>
                          </li>
                          <li>
                            <Link href="project-single">Project Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="navbar__item navbar__item--has-children nav-fade">
                        <button
                            aria-label="dropdown menu"
                            className="navbar__dropdown-label"
                        >
                          Pages
                        </button>
                        <ul className="navbar__sub-menu">
                          <li>
                            <Link href="faq">FAQ</Link>
                          </li>

                          <li>
                            <Link href="contact-us">Contact Us</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="navbar__options">
                    <div className="navbar__mobile-options d-none d-sm-flex">
                      <Link href="contact-us" className="btn btn--secondary">
                        Let&apos;s Talk
                      </Link>
                    </div>
                    <button
                      className="open-mobile-menu d-flex d-xl-none"
                      aria-label="toggle mobile menu"
                      onClick={handleNav}
                    >
                      <i className="fa-light fa-bars-staggered"></i>
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Offcanvas openNav={openNav} setOpenNav={setOpenNav} />
    </>
  );
};

export default HeaderTwo;
