import AboutHRStrategy from "./AboutHRStrategy";
import CompensationSurvey from "./Compensation-Survey/CompensationSurvey";
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
      <CompensationSurvey></CompensationSurvey>
    </div>
  );
};

export default HRStrategy;
