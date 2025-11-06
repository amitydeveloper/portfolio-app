import "../styles/Skills.css";

function Skills() {
  const skills = [
    {
      name: "HTML",
      level: 5,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
      name: "CSS",
      level: 4,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
    },
    {
      name: "JavaScript",
      level: 4,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      name: "Python",
      level: 4,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
      name: "Java",
      level: 3,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    }
  ];

  const tools = [
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
    {
      name: "Git Bash",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    }
  ];

  return (
    <section id="skills" className="skills" data-aos="fade-up">
      <h2 className="skilling">Skills</h2>

      <div className="skill-container">
        {skills.map((skill, index) => (
          <div className="skill-box" key={index}>
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
            <div className="stars">
              {"★".repeat(skill.level)}
              {"☆".repeat(5 - skill.level)}
            </div>
          </div>
        ))}
      </div>

      <h2 className="tool-title">Tools</h2>

      <div className="skill-container">
        {tools.map((tool, index) => (
          <div className="skill-box" key={index}>
            <img src={tool.icon} alt={tool.name} className="skill-icon" />
            <p>{tool.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
