import { ClientJS, ClientMD } from "../assets/AssetsFiles";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container flex testimonials-container">
        <div className="text-center">
          <span className="sub-heading">WHAT OUR CLIENTS SAY</span>
          <h2 className="section-heading">Trusted by Businesses Worldwide</h2>
        </div>
        <div className="grid testimonials-cards">
          <div className="testimonial-card">
            <div className="flex items-center card-header">
              <img src={ClientJS} alt="Client 1" className="" />
              <div>
                <h4>Jane Smith</h4>
                <p className="text-gray-600">CEO, TechStart Inc.</p>
              </div>
            </div>
            <p className="italic">
              "CodeNation transformed our online presence. Their team understood
              our vision perfectly and delivered a product that exceeded our
              expectations. Our user engagement is up 50%!"
            </p>
          </div>
          <div className="testimonial-card">
            <div className="flex items-center card-header">
              <img src={ClientMD} alt="Client 2" className="" />
              <div>
                <h4>Mark Davis</h4>
                <p className="text-gray-600">Founder, E-Shop Global</p>
              </div>
            </div>
            <p className="italic">
              "Working with CodeNation was a breeze. They are professional,
              responsive, and incredibly skilled. They built us a complex
              e-commerce platform that is both fast and secure."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
