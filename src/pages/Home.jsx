import { Link } from "react-router-dom";
import { CiUser } from 'react-icons/ci';

function Home() {
  return (
    <section>
      <div className='home-background'></div>
      <div className='content flex'>
        <span>
          <h1>Trek</h1>
          <h2>find your next adventure starting from here</h2>
        </span>

        <div className='home-cta flex'>
          <Link to="/bikes">See Bikes</Link>
          <button>Make Reservation</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
