import OpportunityOverview from "../components/OpportunityOverview";
import DetailedOpportunity from "../components/DetailedOpportunity";

import "./styles/home.scss";

export default function Opportunity() {
  return (
    <div className="main-page-home-container">
      <div>
        <OpportunityOverview />
      </div>
      <div>
        <DetailedOpportunity />
      </div>
    </div>
  );
}
