import Image from "next/image";

interface Props {
  skill: string;
  imgUrl?: any;
}

const Skills = ({ skill, imgUrl }: Props) => {
  return (
    <div>
      <div className="flex items-center gap-2 bg-hoverColor p-2 rounded-full">
        <Image
          src={imgUrl}
          alt={skill}
          className="w-20 h-20 rounded-full object-contain"
          width={64}
          style={{ contain: "content" }}
          height={64}
        />
      </div>
    </div>
  );
};

export default Skills;
