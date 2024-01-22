import React, { useState } from "react";
import { motion } from "framer-motion";

const Banner = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, my name is
      </motion.h3>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Tosha Patel.
        <span className="text-textDark mt-2 lgl:mt-4">
          Full Stack Developer.
        </span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium text-justify"
      >
        I am a 4th year Computer Engineering student. I am currently focused on
        being proficient in both frontend and backend development. I am looking
        for job oppurtunities as a Software Engineer | Full stack developer.
        <a
          href="#"
          onClick={toggleExpand}
          className={isExpanded ? "hidden" : ""}
        >
          <span className="text-textGreen block relative cursor-pointer h-7 my-1 overflow-x-hidden group">
            {" "}
            Learn more{" "}
            <span className="absolute w-[95px] h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
        {isExpanded && (
          <div className="">
            <p>
              Apart from being a full stack developer, I also have good
              knowledge of Machine learning and Python libraries. I also possess
              good problem solving skills.
            </p>
            <a href="#" onClick={toggleExpand}>
              <span className="text-textGreen block relative cursor-pointer h-7 my-1 overflow-x-hidden group">
                Show Less
                <span className="absolute w-[85px] h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
              </span>
            </a>
          </div>
        )}
      </motion.p>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="border rounded-md w-52 h-14 text-sm text-textGreen border-textGreen tracking-wide font-titleFont hover:bg-hoverColor duration-300"
      >
        <a href="https://github.com/tosha24" target="_blank">
          Check out my Projects!
        </a>
      </motion.button>
    </section>
  );
};

export default Banner;
