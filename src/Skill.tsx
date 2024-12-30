import './Skill.css';
type SkillProps = {
  skill: string;
  experience: string;
};

export default function Skill(props: SkillProps) {
  return (
    <>
      <div className='skillContainer'>
        <h2>{props.skill}</h2>
        <p>{props.experience}</p>
      </div>
    </>
  );
}
