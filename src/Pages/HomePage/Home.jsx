import AboutUs from "../../Components/About-Us/AboutUs";
import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import Cloud from "../../Components/Cloud/Cloud";
import FeaturedCards from "../../Components/FeaturedCards/FeaturedCards";
import Review from "../../Components/Reviews/Review";

// import Services from "../../Components/Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <Cloud></Cloud>
      <Brands></Brands>
      <Review></Review>
    </div>
  );
};

export default Home;
