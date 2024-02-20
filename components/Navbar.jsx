"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
const Navbar = () => {
  const navlinks = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Projects",
      href: "/projects",
    },

    {
      label: "CaseStudy",
      href: "/casestudy",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "Social",
      href: "/bio",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];
  const [open, setopen] = useState(false);
  const toggleMenu = () => {
    setopen((prev) => !prev);
  };

  const menuvariant = {
    initial: { scaleY: 0 }, //menu will be at top if we put it at y0
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    }, //will bring to original height which is given below
    exit: {
      scaleY: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.5,
      },
    },
  };
  //the below initial is for leave and
  //the open is when it open
  //this is for coming one by one
  const containervar = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };
  return (
    <div >
      <nav className=" rounded-t-lg w-full h-fit flex justify-between items-center border-2 border-black p-4">
      <div className="    w-10 flex space-x-2">
        <div className=" p-2 rounded-full md:p-3 bg-black " />
        <div className=" p-2  rounded-full md:p-3 border-2 border-black shadow-art" />
        <div className="p-2  rounded-full md:p-3 border-2 border-black shadow-art" />
      </div>
      <div>
        <p className=" max-md:hidden font-integral text-[22px]">
          tenzin Portfolio
        </p>
        <p className=" md:hidden font-integral text-[22px]">TENZIN</p>
      </div>
      <div className="max-md:hidden " />
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        <RxHamburgerMenu size={20} />
      </div>
      </nav>
      
      {/* PHONEMENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuvariant}
            initial="initial"
            animate="animate"
            exit="exit"
            className=" fixed left-0 top-0 w-full h-screen bg-yellow-400 text-black p-10 origin-top"
          >
            {" "}
            {/* origin top is must or else it will start and end from center*/}
            <div className=" flex h-full flex-col">
              <div className=" flex justify-between">
                <h1 className=" text-lg font-medium text-black ">
                  TENZIN DELEK
                </h1>
                <p
                  className=" cursor-pointer text-base text-black"
                  onClick={toggleMenu}
                >
                  Close
                </p>
              </div>

              <motion.div
                variants={containervar}
                exit="initial"
                initial="initial"
                animate="open"
                className=" flex flex-col justify-center h-full  items-center gap-4"
              >
                {navlinks.map((link, index) => {
                  return (
                    <div className=" overflow-hidden" key={index}>
                      {" "}
                      {/*makes it cutted like as it is coming from below */}
                      <MobileNavLink
                        key={index}
                        title={link.label}
                        href={link.href}
                        toggleMenu={toggleMenu}
                      />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
 {/* will be at bottom that y:30vh  and the open 0 puts it back to its spot*/}
 const moblinkvar={
  initial:{y:"30vh",
  transition:
  {duration:0.5,
  ease:[0.37,0,0.63,1]},
  },
    open:{y:0,
      transition:{duration:0.7,ease:[0,0.55,0.45,1]}}
  }
const MobileNavLink = ({ title, href ,toggleMenu}) => {
  
  const handleLinkClick = () => {
    toggleMenu();
  };
  return (
    <motion.div variants={moblinkvar}  className=" text-2xl uppercase text-black" onClick={handleLinkClick}>
      <Link href={href}>{title}</Link>
    </motion.div>
  );
};