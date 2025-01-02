import { Calendar } from "../components/Calendar";
import { DemandClinicsCard } from "../components/cards/DemandClinicsCard";
import { MedicineSuppliesCard } from "../components/cards/MedicineSuppliesCard";
import { PatientOverviewCard } from "../components/cards/PatientOverviewCard";
import { SummaryCard } from "../components/cards/SummaryCard";
import { Navbar } from "../components/Navbar";
import { summaryCardData } from "../constants/contentDashboard";

export const ContentContainer = () => {
  return (
    <div className="w-full h-full sm:max-w-[calc(100%-256px)] ml-auto flex flex-col">
      <Navbar />

      <div className="w-full p-4">
        <div className="w-full gap-2 grid grid-rows-4 md:grid-rows-2 xl:grid-rows-1 grid-flow-col">
          {summaryCardData.map((item) => (
            <SummaryCard
              key={item.id}
              icon={<item.icon />}
              title={item.title}
              value={item.value}
              maxValue={item.maxValue}
              percentage={item.percentage}
              typePercentage={item.typePercentage}
            />
          ))}
        </div>

        <div className="w-full mt-4 gap-4 flex flex-col xl:flex-row">
          {/* left-container */}
          <div className="w-full flex flex-[2] flex-col">
            <PatientOverviewCard />

            <div className="w-full mt-4 gap-4 flex flex-col lg:flex-row">
              <MedicineSuppliesCard />

              <DemandClinicsCard />
            </div>
          </div>

          {/* right-container */}
          <div className="xl:w-1/3 gap-0 flex flex-col">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
};
