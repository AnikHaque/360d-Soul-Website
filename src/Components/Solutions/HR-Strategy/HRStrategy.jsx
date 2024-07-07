import AboutHRStrategy from "./AboutHRStrategy";
import HRStrategyBanner from "./HRStrategyBanner";
import PmsKpi from "./PMS-KPI/PmsKpi";
import TalentManagement from "./TalentManagement/TalentManagement";

const HRStrategy = () => {
  return (
    <div>
      <HRStrategyBanner></HRStrategyBanner>
      <AboutHRStrategy></AboutHRStrategy>
      <TalentManagement></TalentManagement>
      <PmsKpi></PmsKpi>
    </div>
  );
};

export default HRStrategy;
