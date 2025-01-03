import './ProjectList.css';
import Project from './Project';

const projects = [
  {
    image: './projectImages/Interactive-rating-component.jpg',
    projectTitle: 'Interactive rating component',
    skills: ['HTML', 'CSS', 'JS'],
    project: 'https://cleyrolsc.github.io/interactive-rating-component/',
    projectCode: 'https://github.com/cleyrolsc/interactive-rating-component/',
  },
  {
    image: './projectImages/FAQ-accordion.jpg',
    projectTitle: 'FAQ accordion',
    skills: ['HTML', 'CSS', 'JS'],
    project: 'https://cleyrolsc.github.io/faq-accordion/',
    projectCode: 'https://github.com/cleyrolsc/faq-accordion',
  },
];

export default function Projects() {
  return (
    <div className='projectListContainer'>
      <div className='projectsHeader'>
        <h1>Projects</h1>
        <button>Contact me</button>
      </div>
      <div className='projectsContainer'>
        {projects.map((project) => (
          <Project {...project}></Project>
        ))}
      </div>
    </div>
  );
}
