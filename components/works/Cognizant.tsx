import { RxDoubleArrowRight } from "react-icons/rx";
import { motion } from "framer-motion";

const Cognizant = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        AI Programmer{" "}
        <span className="text-textGreen tracking-wide">@Cognizant </span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">June 2023</p>
      <ul className="mt-6 flex flex-col">
        <li className="text-base text-textDark flex gap-2 ">
          <span className="text-textGreen mt-1">
            <RxDoubleArrowRight />{" "}
          </span>{" "}
          Conducted Exploratory data analysis, uncovering insights and patterns in the dataset of Gala Groceries sample dataset.
        </li>
        <li className="text-base text-textDark flex gap-2 ">
          <span className="text-textGreen mt-1">
            <RxDoubleArrowRight />{" "}
          </span>
          Built data models to address specific business requirements, leveraging appropriate techniques and algorithms.
        </li>
        <li className="text-base text-textDark flex gap-2 ">
          <span className="text-textGreen mt-1">
            <RxDoubleArrowRight />{" "}
          </span>{" "}
          Developed machine learning models, trained and validated them, and interpreted the results for actionable insights.
        </li>
        <li className="text-base text-textDark flex gap-2 ">
          <span className="text-textGreen mt-1">
            <RxDoubleArrowRight />{" "}
          </span>{" "}
          Deployed the models into production, ensuring scalability, efficiency, and quality through thorough testing and monitoring.
        </li>
      </ul>
    </motion.div>
  );
};

export default Cognizant;
