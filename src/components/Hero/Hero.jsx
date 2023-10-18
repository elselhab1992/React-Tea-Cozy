import hero from "./../../assets/images/img-mission-background.webp";
import { HeroImage, HeroText } from "./HeroStyles";

const Hero = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <HeroImage src={hero} alt="banner" />

          <HeroText>
            <h2>Our Mission</h2>
            <p>
              Handpicked, Artisanally Curated, Free Range, Sustainable, Small
              Batch, Fair Trade, Organic Tea
            </p>
          </HeroText>
        </div>
      </div>
    </div>
  );
};

export default Hero;
