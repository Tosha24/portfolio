import logo from "@/public/assets";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import { TbBrandGithub } from "react-icons/tb";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

const Navbar = () => {
  const ref = useRef<string | any>("");

  const [showMenu, setShowMenu] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setShowMenu(false);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      setShowMenu(false);
    }
  }

  return (
    <div className="bg-slate-950 sticky top-0 z-50">
      <div className="w-full bg-neutral-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] shadow-md shadow-black sticky h-20 lg:h-[12vh] top-0 z-50 px-4">
        {/* top-0 along with sticky makes it sticky */}
        <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center gap-4"
          >
            <Image src={logo} alt="logo" className="w-12 rounded-full" />
            <span className="hidden mdl:block text-[30px] font-medium ">
              Tosha
            </span>
            <span className="hidden lg:block text-[30px] font-medium ">
              Patel
            </span>
          </motion.div>
          <div className="hidden mdl:inline-flex items-center gap-7">
            <ul className="flex text-[16px] gap-7">
              <Link
                href="#home"
                className="flex items-center gap-1 font-medium  hover:text-textGreen cursor-pointer duration-300"
                onClick={handleScroll}
              >
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  Home
                </motion.li>
              </Link>
              <Link
                href="#about"
                className="flex items-center gap-1 font-medium  hover:text-textGreen cursor-pointer duration-300"
                onClick={handleScroll}
              >
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  About
                </motion.li>
              </Link>
              <Link
                href="#experience"
                className="flex items-center gap-1 font-medium  hover:text-textGreen cursor-pointer duration-300"
                onClick={handleScroll}
              >
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  Experience
                </motion.li>
              </Link>
              <Link
                href="#projects"
                className="flex items-center gap-1 font-medium  hover:text-textGreen cursor-pointer duration-300"
                onClick={handleScroll}
              >
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  Projects
                </motion.li>
              </Link>
              <Link
                href="#contact"
                className="flex items-center gap-1 font-medium  hover:text-textGreen cursor-pointer duration-300"
                onClick={handleScroll}
              >
                <motion.li
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                >
                  Contact
                </motion.li>
              </Link>
            </ul>
            <a
              href="https://drive.google.com/file/d/142G0CDcjTUV1F6kLLDN1ltfsnW1CIAoF/view?usp=sharing"
              target="_blank"
            >
              <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.5 }}
                className="px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
              >
                Resume
              </motion.button>
            </a>
          </div>

          {/* Small icon design */}
          <div
            onClick={() => setShowMenu(true)}
            className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group"
          >
            <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-200"></span>
            <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-3 transition-all ease-in-out duration-200"></span>
            <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-1 transition-all ease-in-out duration-200"></span>
          </div>

          {showMenu && (
            <div
              ref={(node) => (ref.current = node)}
              onClick={handleClick}
              className="absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end"
            >
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.1 }}
                className="w-[80%] bg-[#112240] h-full overflow-y-scroll scrollbarHide flex flex-col items-center px-4 py-10 relative"
              >
                <MdOutlineClose
                  onClick={() => setShowMenu(false)}
                  className="text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4"
                />
                <div className="flex flex-col gap-9 items-center my-auto">
                  <ul className="flex flex-col text-base gap-9">
                    <Link
                      href="#home"
                      className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300"
                      onClick={handleScroll}
                    >
                      <motion.li
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.1,
                          ease: "easeIn",
                        }}
                      >
                        Home
                      </motion.li>
                    </Link>
                    <Link
                      href="#about"
                      className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300"
                      onClick={handleScroll}
                    >
                      <motion.li
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.2,
                          ease: "easeIn",
                        }}
                      >
                        About
                      </motion.li>
                    </Link>
                    <Link
                      href="#experience"
                      className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300"
                      onClick={handleScroll}
                    >
                      <motion.li
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.3,
                          ease: "easeIn",
                        }}
                      >
                        Experience
                      </motion.li>
                    </Link>
                    <Link
                      href="#projects"
                      className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300"
                      onClick={handleScroll}
                    >
                      <motion.li
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.4,
                          ease: "easeIn",
                        }}
                      >
                        Projects
                      </motion.li>
                    </Link>
                    <Link
                      href="#contact"
                      className="flex items-center gap-1 font-medium text-textDark hover:text-textGreen cursor-pointer duration-300"
                      onClick={handleScroll}
                    >
                      <motion.li
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.5,
                          ease: "easeIn",
                        }}
                      >
                        Contact
                      </motion.li>
                    </Link>
                  </ul>
                  <a href="/assets/resume.pdf" target="_blank">
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.6, ease: "easeIn" }}
                      className="w-32 h-10 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
                    >
                      Resume
                    </motion.button>
                  </a>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.7, ease: "easeIn" }}
                    className="flex gap-4"
                  >
                    <a
                      href="https://github.com/Tosha24"
                      target="_blank"
                      className="text-xl w-10 h-10 rounded-full bg-transparent inline-flex items-center border-[2px] border-hoverColor hover:border-textGreen justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
                    >
                      <span>
                        <TbBrandGithub />
                      </span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tosha24/"
                      target="_blank"
                      className="text-xl w-10 h-10 rounded-full bg-transparent inline-flex items-center border-[2px] border-hoverColor hover:border-textGreen justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
                    >
                      <span>
                        <SlSocialLinkedin />
                      </span>
                    </a>
                    <a
                      href="https://leetcode.com/Tosha24/"
                      target="_blank"
                      className="text-xl w-10 h-10 rounded-full bg-transparent inline-flex items-center border-[2px] border-hoverColor hover:border-textGreen justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
                    >
                      <span>
                        <SiLeetcode />
                      </span>
                    </a>
                    <a
                      href="https://www.hackerrank.com/toshapatel179?hr_r=1"
                      target="_blank"
                      className="text-xl w-10 h-10 rounded-full bg-transparent inline-flex items-center border-[2px] border-hoverColor hover:border-textGreen justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
                    >
                      <span>
                        <SiHackerrank />
                      </span>
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
