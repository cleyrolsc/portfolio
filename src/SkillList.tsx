import './SkillList.css';
import Skill from './Skill';

const skills = [
  { skill: 'Java', experience: '3 months' },
  { skill: 'NodeJS', experience: '6 months' },
  { skill: 'ExpressJS', experience: '6 months' },
  { skill: 'TypeScript', experience: '6 months' },
  { skill: 'React', experience: '6 months' },
  { skill: 'JavaScript', experience: '6 months' },
  { skill: 'HTML', experience: '1 year' },
  { skill: 'CSS', experience: '1 year' },
  { skill: 'Git', experience: '6 months' },
  { skill: 'Github', experience: '6 months' },
];

export default function SkillList() {
  return (
    <>
      <hr />
      <div className={'skillsContainer'}>
        {skills.map((skill) => (
          <Skill {...skill}></Skill>
        ))}
      </div>
      <hr />
    </>
  );
}
