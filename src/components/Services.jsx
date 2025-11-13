function Services() {
  return (
    <section className="services-section">
      <div className="container grid services-container  ">
        <div className="md:pr-8">
          <span className="sub-heading">OUR SERVICES</span>
          <h2 className="section-heading text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
            What We Do Best
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            From initial concept to final launch, we provide a complete suite of
            digital services to bring your ideas to life.
          </p>
          <ul className="space-y-4">
            <li className="flex service-item">
              <span className="icon-container">
                <i className="fa-solid fa-code"></i>
              </span>
              <div>
                <h3>Custom Software Development</h3>
                <p>
                  Scalable and secure software built to meet your unique
                  business needs.
                </p>
              </div>
            </li>
            <li className="flex service-item">
              <span className="icon-container">
                <i className="fa-solid fa-laptop-code"></i>
              </span>
              <div>
                <h3>Website Design & Development</h3>
                <p className="text-gray-600">
                  Beautiful, responsive, and user-friendly websites that convert
                  visitors.
                </p>
              </div>
            </li>
            <li className="flex service-item">
              <span className="icon-container">
                <i className="fa-brands fa-app-store-ios"></i>
              </span>
              <div>
                <h3 className="text-xl font-semibold">
                  Mobile App Development
                </h3>
                <p className="text-gray-600">
                  Engaging iOS and Android applications for your customers on
                  the go.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex service-section__image">
          <img
            src="https://placehold.co/600x400/e2e8f0/334155?text=Our+Services"
            alt="Our Services"
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
