import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";
import { motion } from "framer-motion";

interface Props {
  title: string;
  subTitle: string;
  desc: string[];
  listItem: string[];
  gitlink: string;
  applink: string;
}

const ProjectCard = ({
  title,
  subTitle,
  desc,
  listItem,
  gitlink,
  applink,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full border h-[400px] rounded-lg bg-[#112240] p-2 flex flex-col justify-center hover:-translate-y-2 transition-transform duration-300 gap-1"
    >
      <div className="flex justify-between items-center h-[30px]">
        <a href={`${gitlink}`} target="_blank">
          <FaGithubSquare className="text-3xl hover:text-textGreen cursor-pointer" />
        </a>
        <a href={`${applink}`} target="_blank">
          <MdOutlineOpenInNew className="text-3xl hover:text-textGreen cursor-pointer" />
        </a>
      </div>
      <div className="h-[60px] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-titleFont font-semibold tracking-wide text-textLight group-hover:text-textGreen duration-300">
          {title}
        </h2>
        <h3 className='text-md text-textLight/80'>{subTitle}</h3>
      </div>
      <div className="overflow-y-auto my-scrollbar min-h-[200px] px-2">
        <ul className="flex flex-col gap-1 text-sm text-justify list-disc break-words list-inside text-textDark overflow-x-hidden">
          {desc.map((item, index) => (
            <li key={index} className="list-disc">{item}</li>
          ))}
        </ul>
      </div>
      <div className="max-h-[150px] p-1 overflow-y-hidden border-t border-gray-50/20">
        <ul className="text-xs mdl:text-sm text-extraColor flex flex-row gap-3 flex-wrap items-center justify-between">
          {listItem.map((item, index) => (
            <li key={index} className="border p-1 border-extraColor rounded-lg">
              {" "}
              {item}{" "}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
