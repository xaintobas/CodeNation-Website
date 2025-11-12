import HeroImage from "../assets/dev-agency.svg";

function HeroSection() {
  return (
    <section>
      <div className="container flex">
        <div>
          <p className="sub-heading">WEB & SOFTWARE DEVELOPMENT</p>
          <h1>Your Vision, Our Code.</h1>
          <p>
            We design and build custom websites and software solutions that
            drive growth, engage users, and deliver real business results.
          </p>
          <button className="btn btn-primary">Start Your Project</button>
        </div>
        <img src={HeroImage} alt="" />
      </div>
    </section>
  );
}

export default HeroSection;
