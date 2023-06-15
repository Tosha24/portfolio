import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";
import { motion } from "framer-motion";

interface Props {
  title: string;
  desc: string;
  listItem: string[];
  gitlink: string;
  applink: string;
}

const ProjectCard = ({ title, desc, listItem, gitlink, applink}: Props) => {
  return (
    <motion.div
    initial={{opacity: 0}} 
    animate={{opacity: 1}} 
    transition={{delay: 0.1}}
    className="w-full border h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
      <div className="flex justify-between items-center">
        <a href={`${gitlink}`} target="_blank">
          <FaGithubSquare className="text-3xl hover:text-textGreen cursor-pointer" />
        </a>
        <a href={`${applink}`} target="_blank">
          <MdOutlineOpenInNew className="text-3xl hover:text-textGreen cursor-pointer" />
        </a>
      </div>
      <div>
        <h2 className="text-2xl font-titleFont font-semibold tracking-wide text-textLight group-hover:text-textGreen duration-300">
          {title}
        </h2>
        <p className="text-sm mt-3 text-justify text-textDark">
          {desc}
        </p>
      </div>
      <ul className="text-xs mdl:text-sm text-extraColor gap-2 justify-between flex flex-row flex-wrap">
        {listItem.map((item, index) => (
            <li key={index}> {item} </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ProjectCard;
