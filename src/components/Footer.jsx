function Footer() {
  return (
    <footer className="footer-section">
      <div className="container footer-container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="footer-content grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <span className="bg-primary-600 text-white w-8 h-8 flex items-center justify-center rounded-lg font-bold text-xl">
                D
              </span>
              <span className="font-bold text-2xl text-white">DevAgency</span>
            </a>
            <p className="text-gray-400">
              We build digital experiences that drive success.
            </p>
          </div>

          <div>
            <h5 className="font-semibold text-white text-lg mb-4">Services</h5>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary-500">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500">
                  Software Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white text-lg mb-4">
              Quick Links
            </h5>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-primary-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-primary-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-500">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-white text-lg mb-4">
              Contact Us
            </h5>
            <ul className="space-y-3">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-primary-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <span>+1 (234) 567-890</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-primary-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span>hello@devagency.com</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-3 text-primary-500 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17.657 16.657l-4.243-4.243a1 1 0 010-1.414l4.243-4.243a1 1 0 011.414 1.414l-4.243 4.243a1 1 0 010 1.414l4.243 4.243a1 1 0 01-1.414 1.414zM6.343 16.657l-4.243-4.243a1 1 0 010-1.414l4.243-4.243a1 1 0 011.414 1.414L3.313 12.5l4.243 4.243a1 1 0 01-1.414 1.414z"
                  ></path>
                </svg>
                <span>123 Code Street, Tech City, 10101</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p>&copy; 2025 DevAgency. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
