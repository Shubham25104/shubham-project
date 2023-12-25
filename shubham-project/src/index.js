// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Carousel from './componants/Carousel'; // Import the Carousel component
import reportWebVitals from './reportWebVitals';
import Footer from './footer.js'
import { Link, animateScroll as scroll } from 'react-scroll';

// Header component
function Header() {
  return (
    <header>
      <h1>E-Bharat</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>Explore India</li>
          <li>E-Services</li>
          <li>About</li>
          <nav>
        <Link
          to="contactSection" // the same as the "name" prop in the Footer component
          smooth={true}
          duration={500}
          spy={true}
          exact='true'
        >
          Contact
        </Link>
      </nav>
        </ul>
      </nav>
    </header>
  );
}

// Root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
      <Header />
      <Carousel />
      
      <Footer />
    </>
  </React.StrictMode>
);

reportWebVitals();
