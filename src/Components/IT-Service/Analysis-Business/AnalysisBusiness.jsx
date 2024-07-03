import AnalysisBusinessBanner from "./AnalysisBusinessBanner";
import AnalysisBusinessFuture from "./AnalysisBusinessFuture";
import AnalyticsServiceProvide from "./AnalyticsServiceProvide";
import BusinessAnalysisIntro from "./BusinessAnalysisIntro";
import BusinessWork from "./BusinessWork";
import DataAnalyticsIntro from "./DataAnalyticsIntro";

const AnalysisBusiness = () => {
  return (
    <div>
      <AnalysisBusinessBanner></AnalysisBusinessBanner>
      <BusinessAnalysisIntro></BusinessAnalysisIntro>
      <AnalyticsServiceProvide></AnalyticsServiceProvide>
      <BusinessWork></BusinessWork>
      <AnalysisBusinessFuture></AnalysisBusinessFuture>
      <DataAnalyticsIntro></DataAnalyticsIntro>
    </div>
  );
};

export default AnalysisBusiness;
