import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="white">
      <div className="home-background"></div>
      <div className="content flex">
        <span>
          <h1>Trek</h1>
          <h2>find your next adventure starting from here</h2>
        </span>

        <div className="home-cta flex">
          <Link to="/bikes">See Bikes</Link>
          <Link to="/reserve">Make Reservation</Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
