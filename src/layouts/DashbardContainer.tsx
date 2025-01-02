import { Sidebar } from "../components/Sidebar";
import { ContentContainer } from "./ContentContainer";

const DashboardContainer = () => {
  return (
    <div className="w-full">
      <Sidebar />

      <ContentContainer />
    </div>
  );
};

export default DashboardContainer;
