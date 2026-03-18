const MainSection = () => {
  return (
    <div className="hero">
      <div className="tagline">
        <h1>
          Unleash Your Inner Champion Today. <br />
          All In One Place.
        </h1>
        <p>
          Join the ultimate tennis experience — where passion meets performance,
          <br />
          and every swing brings you closer to victory.
        </p>
        <button>Start your own journey</button>
      </div>
      <img
        src="https://images.pexels.com/photos/12806342/pexels-photo-12806342.jpeg"
        alt=""
      />
      <div className="hero-bottom">
        <h5>
          Train with real professionals. <br />
          Get the real results.
        </h5>
        <div className="img-stamp">
          <img
            src="https://images.pexels.com/photos/1698731/pexels-photo-1698731.jpeg"
            alt=""
            className="img-1"
          />
          <img
            src="https://images.pexels.com/photos/14391924/pexels-photo-14391924.jpeg"
            alt=""
            className="img-2"
          />
          <img
            src="https://images.pexels.com/photos/32612644/pexels-photo-32612644.jpeg"
            alt=""
            className="img-3"
          />
        </div>
        <div className="social-links">
          <h5><a href="#">Instagram</a> ↗</h5>
          <h5><a href="#">Meta</a> ↗</h5>
          <h5><a href="https://www.linkedin.com/in/mohdshayaan/" target="blank">LinkedIn</a> ↗</h5>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
