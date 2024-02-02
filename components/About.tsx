import SectionTitle from "./SectionTitle";
import Skills from "./Skills";
import nextImage from "../public/assets/images/next.png";
import reactImage from "../public/assets/images/react.png";
import c from "../public/assets/images/c.png";
import cpp from "../public/assets/images/cpp.png";
import express from "../public/assets/images/express.png";
import figma from "../public/assets/images/figma.png";
import css from "../public/assets/images/css.png";
import firebase from "../public/assets/images/firebase.png";
import git from "../public/assets/images/git.png";
import flask from "../public/assets/images/flask.png";
import github from "../public/assets/images/github.png";
import htmlImage from "../public/assets/images/html.png";
import java from "../public/assets/images/java.png";
import js from "../public/assets/images/js.png";
import matplotlib from "../public/assets/images/matplotlib.png";
import mongo from "../public/assets/images/mongo.png";
import netlify from "../public/assets/images/netlify.png";
import node from "../public/assets/images/node.png";
import python from "../public/assets/images/python.png";
import redux from "../public/assets/images/redux.png";
import render from "../public/assets/images/render.png";
import scikit from "../public/assets/images/scikit.png";
import sql from "../public/assets/images/sql.png";
import streamlit from "../public/assets/images/streamlit.png";
import tailwind from "../public/assets/images/tailwind.png";
import ts from "../public/assets/images/ts.png";
import vercel from "../public/assets/images/vercel.png";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="ABOUT ME" titleNo="01" />
      <div>
        <p className="text-justify tracking-wide font-medium text-textDark flex-row">
          Hello, I&apos;m a{" "}
          <span className="text-textGreen">Full Stack Developer</span> based in
          India. With a Bachelor&apos;s degree in Computer Engineering, I have a
          strong foundation in Javascript, Java, Python, C and C++. Currently, I
          am honing my expertise in{" "}
          <span className="text-textGreen">
            React.js, Next.js, Tailwind CSS, Typescript, Javascript, Redux
            Toolkit, HTML, and CSS
          </span>{" "}
          while gaining practical experience in{" "}
          <span className="text-textGreen">
            MongoDB, Express.js, and Node.js
          </span>
          . Known for my ability to quickly grasp new technologies, I am
          passionate about tackling real-world challenges and continuously
          expanding my skill set. Collaborating seamlessly within teams, I have
          a proven track record of solving complex problems effectively. Beyond
          technical proficiency, I excel in{" "}
          <span className="text-textGreen">communication</span> and{" "}
          <span className="text-textGreen">problem-solving</span>. If
          you&apos;re seeking an adaptable, results-oriented professional
          dedicated to excellence, please don&apos;t hesitate to{" "}
          <span className="text-textGreen hover:underline hover:-transition-x-2 duration-700 cursor-pointer">
            <a href="#contact">connect</a>
          </span>{" "}
          with me.
        </p>

        <h4 className="text-xl font-semibold font-titleFont text-textLight my-7 flex items-center">
          <span>Tech Skills</span>
          <span className="w-24 md:w-1/5 ml-2 bg-gray-700 h-[.5px] inline-flex"></span>
        </h4>
        <div className="flex flex-wrap gap-4">
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-4 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <Image src={reactImage} alt="React.js" width={100} height={100} />
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-4 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <Image src={nextImage} alt="Next.js" width={100} height={100} />
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-4 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <Image src={tailwind} alt="Tailwind CSS" width={100} height={100} />
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <Image src={js} alt="JavaScript" />
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-4 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <Image src={ts} alt="Typescipt" />
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-4 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <Image src={redux} alt="Redux" width={100} height={100} />
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-4 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <Image
              src={express}
              alt="Express.js"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-2 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <Image src={node} alt="Node.js" width={100} height={100} />
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-3 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <Image src={mongo} alt="MongoDB" width={100} height={100} />
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-4 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <Image
              src={firebase}
              alt="Google Firebase"
              width={100}
              height={100}
            />
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-4 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <Image src={sql} alt="MySQL" width={100} height={100} />
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-3 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <Image src={htmlImage} alt="HTML5" width={100} height={100} />
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-5 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <Image src={css} alt="CSS3" width={100} height={100} />
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-4 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <Image src={c} alt="C" width={100} height={100} />
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-4 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <Image src={cpp} alt="C++" width={100} height={80} />
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-4 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <Image src={java} alt="JAVA" className="h-[70px] w-[45px]" />
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-4 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <Image src={python} alt="Python" width={100} height={100} />
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-4 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <span>ML</span>
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-4 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <span>NLP</span>
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-1 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <Image src={scikit} alt="Sci-kit learn" width={100} height={100} />
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-4 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <span>Matplot</span>
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-2 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <Image
              src={flask}
              alt="Flask"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-4 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <Image src={streamlit} alt="Streamlit" width={100} height={100} />
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-7 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <Image src={figma} alt="Figma" width={100} height={100} />
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-4 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <Image
              src={vercel}
              alt="Vercel"
              className="border border-gray-100/10 rounded-full"
            />
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-4 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <Image src={netlify} alt="Netlify" className="w-12 h-12" />
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-4 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <Image src={render} alt="Render" className="w-12 h-12" />
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-4 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <Image src={git} alt="Git" width={100} height={100} />
          </div>
          <div className="bg-transparent cursor-pointer border border-textDark rounded-full shadow-md p-4 flex flex-col items-center justify-center transition duration-300 transform hover:scale-110 hover:shadow-lg w-20 h-20">
            <Image src={github} alt="GitHub" width={100} height={100} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
