interface Props {
  skill: string;
}

const Skills = ({ skill }: Props) => {
  return (
    <a href="#">
      <p className="border border-textDark px-6 py-2 rounded-lg text-md tracking-wide bg-transparent text-textDark hover:text-textGreen hover:border-textGreen font-medium duration-300 hover:-translate-y-1 transition-all">
        {skill}
      </p>
    </a>
  );
};

export default Skills;
