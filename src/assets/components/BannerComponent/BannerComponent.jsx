import "./BannerComponent.css";


const BannerComponent = () => {
  return (
        <section className="hero">
        <div className="content">
          <h2 className="h2">A smarter way to trade industrial scrap.</h2>
          <img src="/src/assets/images/hero.png" alt="" className="img" />
          <h3 className="h3">
            Companies list their scrap. Recyclers bid competitively. <br />AXIA
            powers the process with transparency, speed, and value.
          </h3>
        </div> 
        <div className="icon">
      <a href="#steps"><img src="/src/assets/images/arrow-down.svg" alt="" className="icon-img" /></a> 
        </div>
      </section>
  )
}

export default BannerComponent          