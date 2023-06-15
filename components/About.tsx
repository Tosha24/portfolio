import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import Skills from "./Skills";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="ABOUT ME" titleNo="01" />
        <div>
          <p className="text-justify tracking-wide font-medium text-textDark flex-row">
            Hello, I&apos;m a {" "}
            <span className="text-textGreen">Computer Engineer</span> based in
            India. As a student pursuing a Bachelor&apos;s degree, I am committed to
            using data to gain valuable insights that drive informed
            decision-making. I am currently focused on developing my skills in
            <span className="text-textGreen">
              {" "}
              Data Science and Machine Learning
            </span>
            , while also gaining experience in{" "}
            <span className="text-textGreen"> Web Development</span>. With good
            knowledge in C, C++, Java, Python and React.js, I have a solid
            foundation in programming and a knack for learning new technologies
            quickly. I am eager to apply my skills to real-world problems and am
            always{" "}
            <span className="text-textGreen">looking for oppurtunities </span>{" "}
            to grow and learn. I have a proven track record of working
            collaboratively with teams to solve complex problems. In addition to
            my technical skills, I possess a very{" "}
            <span className="text-textGreen"> good communication </span> and{" "}
            <span className="text-textGreen"> problem solving </span>. If you&apos;re
            looking for someone who is adaptable, result-driven, and committed
            to excellence, please feel free to{" "}
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
            <Skills skill="Machine Learning" />
            <Skills skill="Neural Networks" />
            <Skills skill="NLP" />
            <Skills skill="Sci-kit learn" />
            <Skills skill="Matplotlib" />
            <Skills skill="Python" />
            <Skills skill="Flask" />
            <Skills skill="Streamlit" />
            <Skills skill="Google Firebase" />
            <Skills skill="MySQL" />
            <Skills skill="JAVA" />
            <Skills skill="C++" />
            <Skills skill="C" />
            <Skills skill="ReactJS" />
            <Skills skill="NextJS 13" />
            <Skills skill="Typescript" />
            <Skills skill="Javascript" />
            <Skills skill="HTML5" />
            <Skills skill="Tailwind CSS" />
            <Skills skill="Styled Components" />
            <Skills skill="CSS3" />
            <Skills skill="Figma" />
            <Skills skill="Netlify" />
          </div>
        </div>
    </section>
  );
};

export default About;
