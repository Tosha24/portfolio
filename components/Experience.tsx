import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Cognizant from "./works/Cognizant";
import Coreway from "./works/Coreway";

const Experience = () => {
  const [workCognizant, setWorkCognizant] = useState(true);
  const [workCoreway, setWorkCoreway] = useState(false);

  const handleWork = (work: string) => {
    if (work == "Cognizant") {
      setWorkCognizant(true);
      setWorkCoreway(false);
    } else if (work == "Coreway") {
      setWorkCognizant(false);
      setWorkCoreway(true);
    } else {
      console.log("Perfect");
    }
  };

  return (
    <section
      id="experience"
      className="max-w-containerSmall mx-auto py-10 lgl:py-24 h-[88vh]"
    >
      <SectionTitle title="EXPERIENCE" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={() => handleWork("Cognizant")}
            className={` ${
              workCognizant
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-md cursor-pointer duration-300 px-8 font-medium tracking-wide`}
          >
            Cognizant
          </li>
          <li
            onClick={() => handleWork("Coreway")}
            className={` ${workCoreway ? "border-l-textGreen text-textGreen" : "border-l-hoverColor text-textDark"} border-l-2 border-l-hoverColor text-textDark bg-transparent hover:bg-[#112240] py-3 text-md cursor-pointer duration-300 px-8 font-medium tracking-wide`}
          >
            Coreway Solutions
          </li>
        </ul>
        {workCognizant && <Cognizant />}
        {workCoreway && <Coreway />}
      </div>
    </section>
  );
};

export default Experience;
