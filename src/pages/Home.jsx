import { Link } from "react-router-dom";

function Home() {
  return (
<<<<<<< HEAD
    <section className='white'>
      <div className='home-background'></div>
      <div className='content flex'>
=======
    <section>
      <div className="home-background"></div>
      <div className="content flex">
>>>>>>> f8f7f33e6bc846732a75fb4a7d9100a608ee01d5
        <span>
          <h1>Trek</h1>
          <h2>find your next adventure starting from here</h2>
        </span>

        <div className="home-cta flex">
          <Link to="/bikes">See Bikes</Link>
          <Link>Make Reservation</Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
