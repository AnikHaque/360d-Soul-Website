import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import Cloud from "../../Components/Cloud/Cloud";
import FeaturedCards from "../../Components/FeaturedCards/FeaturedCards";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <FeaturedCards></FeaturedCards>
      <Cloud></Cloud>
      <Brands></Brands>
      <Footer></Footer>
    </div>
  );
};

export default Home;
