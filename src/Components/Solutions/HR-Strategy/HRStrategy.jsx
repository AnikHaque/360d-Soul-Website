import AboutHRStrategy from "./AboutHRStrategy";
import HRStrategyBanner from "./HRStrategyBanner";
import TalentManagement from "./TalentManagement/TalentManagement";

const HRStrategy = () => {
  return (
    <div>
      <HRStrategyBanner></HRStrategyBanner>
      <AboutHRStrategy></AboutHRStrategy>
      <TalentManagement></TalentManagement>
    </div>
  );
};

export default HRStrategy;
