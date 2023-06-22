import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";
import { motion } from "framer-motion";
import { RxDotFilled } from "react-icons/rx";

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
    className="w-full border h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 relative group">
      <div className="flex justify-between items-center top-5 absolute gap-44">
        <a href={`${gitlink}`} target="_blank">
          <FaGithubSquare className="text-3xl hover:text-textGreen cursor-pointer" />
        </a>
        <a href={`${applink}`} target="_blank">
          <MdOutlineOpenInNew className="text-3xl hover:text-textGreen cursor-pointer" />
        </a>
      </div>
      <div className='overflow-y-scroll scrollbar scrollbar-none h-[70%]'>
        <h2 className="text-2xl font-titleFont font-semibold tracking-wide text-textLight group-hover:text-textGreen duration-300">
          {title}
        </h2>
        <p className="text-sm mt-3 text-justify text-textDark overflow-y-clip">
          {desc}
        </p>
      </div>
      <div className='absolute bottom-3 left-2 right-2 flex flex-row flex-wrap gap-2 justify-between'>
      <ul className="text-xs mdl:text-sm text-extraColor flex flex-row gap-3 flex-wrap justify-between ">
        {listItem.map((item, index) => (
            <li key={index} className='flex flex-row flex-wrap items-center'> <RxDotFilled className='text-md'/>{item} </li>
        ))}
      </ul>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
