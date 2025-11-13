import { LightLogo } from "./Logo.jsx";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-content grid">
          <div className="footer-about flex">
            <LightLogo />
            <p className="text-gray-400">
              We design and build custom websites and software solutions that
              drive growth, engage users, and deliver real business results.
            </p>
          </div>

          <div className="footer-items">
            <h5 className="">Services</h5>
            <ul className="flex footer-list ">
              <li>
                <a href="#" className="">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Software Development
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-items">
            <h5 className="">Quick Links</h5>
            <ul className="flex footer-list">
              <li>
                <a href="#about" className="">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#blog" className="">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#contact" className="">
                  Learn With Us
                </a>
              </li>
              <li>
                <a href="#" className="">
                  Connect With Us
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-items">
            <h5>Contact Us</h5>
            <ul className="flex footer-list">
              <li className="flex items-center">
                <i class="fa-solid fa-phone"></i>
                <span>+234 815 507 1646</span>
              </li>
              <li className="flex items-center">
                <i class="fa-solid fa-envelope"></i>
                <span>hello@codenation.website</span>
              </li>
              <li className="flex items-start">
                <i class="fa-solid fa-location-dot"></i>
                <span>Benin City, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-copyright mt-12 border-t border-gray-800 pt-8 text-center">
          <p>&copy; 2025 CodeNation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
