function Home() {
  return (
    <section>
      <div className='home-background'></div>
      <div className='content flex'>
        <span>
          <h1>Trekk</h1>
          <h2>find your next adventure starting from here</h2>
        </span>
        
        <div className='home-cta flex'>
          <button>See Bikes</button>
          <button>Make Reservation</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
