import Banner from "../../Components/Banner/Banner";
import Cloud from "../../Components/Cloud/Cloud";
import FeaturedCards from "../../Components/FeaturedCards/FeaturedCards";
import Navbar from "../../Shared/Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <FeaturedCards></FeaturedCards>
      <Cloud></Cloud>
    </div>
  );
};

export default Home;
