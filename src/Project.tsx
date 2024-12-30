import './Project.css';

type Project = {
  image: string;
  projectTitle: string;
  skills: string[];
  project: string;
  projectCode: string;
};

export default function Project(props: Project) {
  return (
    <div className='projectContainer'>
      <img src={props.image} alt='projectImage' />
      <h2 className='projectSkillCTitle'>{props.projectTitle}</h2>
      <div className='projectSkillContainer'>
        {props.skills.map((skill) => (
          <p>{skill}</p>
        ))}
      </div>
      <div className='actionContainer'>
        <a href={props.project}>View Project</a>
        <a href={props.projectCode}>View Code</a>
      </div>
    </div>
  );
}
