import Sticker from '../../assets/sticker.svg';
import Laptop from '../../assets/laptop.svg';
import Apple from '../../assets/aple.svg';
import './Home.css';

function Home() {
    return (
        <>
              <section className="mainContent">
        <div className="textContent">
          <h1 className="textContentTitle">Unlock your potential with the best <span className="spanTitle">language </span>tutors</h1>
          <p className="textContentDiscription">Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
          <a href="/teachers" className="textContentButton">Get started</a>
        </div>
        <div className="card bgOrange">
          <img 
            src={Sticker} 
            alt="Character" 
            className="layerGirl" 
          />
          <img 
            src={Laptop} 
            alt="Laptop" 
            className="layerLaptop" 
          />
          <img 
            src={Apple} 
            alt="Apple Logo" 
            className="layerApple" 
          />
        </div>
      </section>    
      <section className="statistics">
        <div className="statistic">
          <p className="statisticValue">32,000 +</p>
          <p className="statisticLabel">Experienced tutors</p>
        </div>
        <div className="statistic">
          <p className="statisticValue">300,000 +</p>
          <p className="statisticLabel">5-star tutor reviews</p>
        </div>
        <div className="statistic">
          <p className="statisticValue">120 +</p>
          <p className="statisticLabel">Subjects taught</p>
        </div>
        <div className="statistic">
          <p className="statisticValue">200 +</p>
          <p className="statisticLabel">Tutor nationalities</p>
        </div>
      </section>
        </>

    );

}

export default Home;