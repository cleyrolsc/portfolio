import Github from './assets/images/icon-github.svg';
import FrontEndMentor from './assets/images/icon-frontend-mentor.svg';
import LinkedIn from './assets/images/icon-linkedin.svg';
import Twitter from './assets/images/icon-twitter.svg';
import './Header.css';

export default function Header() {
  return (
    <>
      <header className='header'>
        <h2>cleyrolsc</h2>
        <ul>
          <li>
            <img src={Github} alt='' />
          </li>
          <li>
            <img src={FrontEndMentor} alt='' />
          </li>
          <li>
            <img src={LinkedIn} alt='' />
          </li>
          <li>
            <img src={Twitter} alt='' />
          </li>
        </ul>
      </header>
    </>
  );
}
