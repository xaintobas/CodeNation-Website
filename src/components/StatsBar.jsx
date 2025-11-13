function StatsBar() {
  return (
    <section className="stats-bar-section">
      <div className="container">
        <div className="grid stats-bar-grid">
          <div className="status-item">
            <span className="stats-number">120+</span>
            <p className="stats-text text-primary-300 mt-1">
              Projects Completed
            </p>
          </div>
          <div className="status-item">
            <span className="stats-number">85+</span>
            <p className="stats-text">Happy Clients</p>
          </div>
          <div className="status-item">
            <span className="stats-number">99%</span>
            <p className="stats-text">Client Satisfaction</p>
          </div>
          <div className="status-item">
            <span className="stats-number">8</span>
            <p className="stats-text">Years in Business</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsBar;
