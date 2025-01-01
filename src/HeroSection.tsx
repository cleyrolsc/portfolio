import './HeroSection.css';
import HeroImage from './assets/images/profile-pic.jpeg';

export default function HeroSection() {
  return (
    <>
      <div className='hero-container'>
        <img className='item1' src={HeroImage} alt='' />
        <div className='hero-description'>
          <h2>
            Nice to meet you! I'm <span> Cleyrol Santana</span>.
          </h2>
          <p>
            Based in the Dominican Republic, I’m a full stack developer
            passionate about building accessible web apps that users love.
          </p>
          <button>Contact me</button>
        </div>
      </div>
    </>
  );
}
