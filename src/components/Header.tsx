import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "../../public/logo.svg";
import { Menu, Close } from "@mui/icons-material/";
import { useRouter } from "next/router";

type Props = {};

export default function Header({}: Props) {
  const [menuPosition, setMenuPosition] = useState<Number>(-20);
  const [menuDisplay, setMenuDisplay] = useState<Number>(1);
  const router = useRouter().pathname;
  const [navIndex, setNavIndex] = useState<Number>(1);
  function openMenu() {
    setMenuPosition(0);
    setMenuDisplay(1);
  }
  function closeMenu() {
    setMenuPosition(120);
    setMenuDisplay(0);
  }
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 375) {
        setMenuPosition(-20);
        setMenuDisplay(1);
      } else {
        setMenuPosition(120);
        setMenuDisplay(0);
      }
    });
    window.addEventListener("load", () => {
      if (window.innerWidth > 375) {
        setMenuPosition(-20);
        setMenuDisplay(1);
      } else {
        setMenuPosition(120);
        setMenuDisplay(0);
      }
    });
    if (router == "/new") {
      setNavIndex(2);
    }
  }, []);
  console.log(router);

  return (
    <>
      <div className="grid grid-cols-2 desktop:grid-cols-5 relative">
        <div className="desktop:col-span-3 py-7">
          <Link href="/">
            <Image src={Logo} alt="Logo" priority />
          </Link>
        </div>
        <div className="desktop:hidden flex justify-end items-center z-0">
          <Menu onClick={openMenu} />
        </div>
        <div
          className="absolute w-3/4 h-[100vh] desktop:h-auto pl-5 pt-20 right-[-1.25rem] bg-white desktop:col-span-2 desktop:relative flex desktop:justify-center desktop:items-center desktop:p-0 desktop:w-full shadow-2xl desktop:shadow-none z-10 transition-all duration-700 ease-in-out"
          style={{ translate: `${menuPosition}%`, opacity: `${menuDisplay}` }}
        >
          <div className="absolute top-9 right-5 desktop:hidden">
            <Close onClick={closeMenu} />
          </div>
          <nav className="w-full">
            <ul className="flex flex-col desktop:flex-row gap-5 desktop:justify-end desktop:items-center">
              {["Home", "New", "Popular", "Trending", "Categories"].map(
                (nav, i) => {
                  i = i + 1;
                  return (
                    <li key={nav}>
                      <Link
                        href={`/${
                          nav == "Home" ? "" : nav.toLocaleLowerCase()
                        }`}
                      >
                        <p
                          className={`hover:text-primary-400 ${
                            i == navIndex ? "text-primary-400" : "text-current"
                          }`}
                        >
                          {nav}
                        </p>
                      </Link>
                    </li>
                  );
                }
              )}
              {/* <li className="hover:text-primary-400">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-primary-400">
                <Link href="/new">New</Link>
              </li>
              <li className="hover:text-primary-400">
                <Link href="/popular">Popular</Link>
              </li>
              <li className="hover:text-primary-400">
                <Link href="/trending">Trending</Link>
              </li>
              <li className="hover:text-primary-400">
                <Link href="/categories">Categories</Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
