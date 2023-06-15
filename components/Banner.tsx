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
      initial={{opacity:0}} 
      animate={{opacity: 1}} 
      transition={{duration: 0.5, delay:0.6}} 
      className="text-lg font-titleFont tracking-wide text-textGreen">
        Hi, my name is
      </motion.h3>
      <motion.h1 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5, delay: 0.7}}
      className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col">
        Tosha Patel.
        <span className="text-textDark mt-2 lgl:mt-4">
          Aspiring Data Scientist.
        </span>
      </motion.h1>
      <motion.p 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5, delay: 0.8}}
      className="text-base md:max-w-[650px] text-textDark font-medium text-justify">
        I am a 4th year Computer Engineering student. I am currently focused on
        developing my skills in data science and machine learning, while also
        gaining experience in web development.
        <a
          href="#"
          onClick={toggleExpand}
          className={isExpanded ? "hidden" : ""}
        >
          <span className="text-textGreen block relative cursor-pointer h-7 my-1 overflow-x-hidden group">
            {" "}
            Learn more{" "}
            <span className='absolute w-[95px] h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500'></span>
          </span>
        </a>
        {isExpanded && (
          <div className="">
            <p>
              I am currently looking for internship opportunities in Data Science. I am also good in web development.
            </p>
            <a href="#" onClick={toggleExpand}>
              <span className="text-textGreen block relative cursor-pointer h-7 my-1 overflow-x-hidden group">
                Show Less
                <span className='absolute w-[85px] h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500'></span>
              </span>
            </a>
          </div>
        )}
      </motion.p>
      <motion.button 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5, delay: 0.9}}
      className='border rounded-md w-52 h-14 text-sm text-textGreen border-textGreen tracking-wide font-titleFont hover:bg-hoverColor duration-300'>Check out my Projects!</motion.button>
    </section>
  );
};

export default Banner;

// absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500
