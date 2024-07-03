import AnalysisBusinessBanner from "./AnalysisBusinessBanner";
import AnalysisBusinessFuture from "./AnalysisBusinessFuture";
import BusinessAnalysisIntro from "./BusinessAnalysisIntro";
import BusinessWork from "./BusinessWork";

const AnalysisBusiness = () => {
  return (
    <div>
      <AnalysisBusinessBanner></AnalysisBusinessBanner>
      <BusinessAnalysisIntro></BusinessAnalysisIntro>
      <BusinessWork></BusinessWork>
      <AnalysisBusinessFuture></AnalysisBusinessFuture>
    </div>
  );
};

export default AnalysisBusiness;
