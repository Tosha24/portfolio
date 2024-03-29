import React, { useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import Coreway from "./works/Coreway";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const [workCoreway, setWorkCoreway] = useState(true);

  const handleWork = (work: string) => {
    if (work == "Cognizant") {
      setWorkCoreway(false);
    } else {
      console.log("");
    }
  };

  const controls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  

  return (
    <section
      id="experience"
      className="max-w-containerSmall mx-auto py-10 lgl:py-24 lgl:h-[88vh]" ref={ref}
    >
      <SectionTitle title="EXPERIENCE" titleNo="02" />
        <motion.div
          initial="hidden"
          animate={controls} variants={animationVariants}
          transition={{ duration: 1.0, delay: 0.1}}
          className="w-full mt-10 flex flex-col md:flex-row gap-16"
        >
          <ul className="md:w-32 flex flex-col">
            <li
              onClick={() => handleWork("Coreway")}
              className={` ${
                workCoreway
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
              } border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-md cursor-pointer duration-300 px-8 font-medium tracking-wide`}
            >
              Coreway Solutions
            </li>
          </ul>
          {workCoreway && <Coreway />}
        </motion.div>
    </section>
  );
};

export default Experience;
