"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const recipientEmail = "tk.patel.official@gmail.com";

  const redirectToGmail = () => {
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      recipientEmail
    )}`;

    window.open(url);
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
  },[controls, inView]);

  return (
    <section
      id="contact"
      className="max-w-containerSmall mx-auto py-10 lgl:py-24 gap-4 flex flex-col items-center justify-center h-[88vh]" ref={ref}
    >
      <motion.p 
      initial="hidden" animate={controls} variants={animationVariants} transition={{duration: 0.5, delay: 0.1}}
      className="font-bold font-titleFont text-2xl flex items-center text-textGreen">
        <span className="text-base md:text-lg mr-2">04. </span> Contact me
      </motion.p>
      <motion.h2 initial="hidden" animate={controls} variants={animationVariants} transition={{duration: 1.0, delay: 0.2}} className="text-3xl font-titleFont mdl:text-5xl font-semibold">
        Get In Touch
      </motion.h2>
      <motion.p initial="hidden" animate={controls} variants={animationVariants} transition={{duration: 1.0, delay: 0.3}} className="max-w-[600px] text-center text-textDark">
        <span className="text-textGreen">Looking for full-time jobs</span> and
        oppurtunities to grow. If you&apos;re looking for someone who is {" "}
        <span className="text-textGreen">adaptable</span>, {" "}
        <span className="text-textGreen"> result-driven</span> and committed to
        excellence, please feel free to connect with me.
      </motion.p>
      <motion.button initial="hidden" animate={controls} variants={animationVariants} transition={{duration: 1.0, delay: 0.4}}
        onClick={redirectToGmail}
        className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300"
      >
        Say Hello
      </motion.button>
    </section>
  );
};

export default Contact;
