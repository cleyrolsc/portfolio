import Header from './Header';
import './Footer.css';

export default function Footer() {
  return (
    <footer id='footer'>
      <div className='container'>
        <div className='description'>
          <h1>Contact</h1>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <form action=''>
          <input type='text' placeholder='NAME' />
          <input type='email' placeholder='EMAIL' />
          <input className='message' type='text-area' placeholder='MESSAGE' />
          <button>Send Message</button>
        </form>
      </div>
      <Header></Header>
    </footer>
  );
}
