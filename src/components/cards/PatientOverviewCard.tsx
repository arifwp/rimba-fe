import { patientOverviewData } from "../../constants/contentDashboard";
import { UserGroupIcon } from "../icons/Icons";

export const PatientOverviewCard = () => {
  return (
    <div className="w-full p-4 border-2 border-borderColor rounded-xl lg:rounded-2xl">
      <div className="w-full flex flex-row justify-between items-center">
        <div className="gap-2 flex flex-row items-center">
          <UserGroupIcon className="text-orange-400 w-6 h-6" />

          <p className="text-xl font-medium text-darkBlue">Patient overview</p>
        </div>

        <select
          id="dateType"
          className="p-2 border border-borderColor text-darkBlue rounded-lg"
          defaultValue={"monthly"}
        >
          <option value="daily">Daily</option>
          <option value={"monthly"}>Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <div className="w-full mt-4 gap-12 flex flex-row">
        <div className="gap-2 flex flex-col">
          <p className="text-softBlue text-md">Total patients</p>

          <p className="text-darkBlue font-semibold text-2xl">
            {patientOverviewData.totalPatients}
          </p>
        </div>

        <div className="gap-2 flex flex-col">
          <div className="gap-2 flex flex-row items-center">
            <div className="w-1 h-4 bg-darkBlue"></div>

            <p className="text-softBlue text-md">Avg. Hospitalized patients</p>
          </div>

          <p className="text-darkBlue font-semibold text-2xl">
            {patientOverviewData.avgPatients}
          </p>
        </div>

        <div className="gap-2 flex flex-col">
          <div className="gap-2 flex flex-row items-center">
            <div className="w-1 h-4 bg-softBlue"></div>

            <p className="text-softBlue text-md">Avg. Outpatient care</p>
          </div>

          <p className="text-darkBlue font-semibold text-2xl">
            {patientOverviewData.avgCare}
          </p>
        </div>
      </div>
    </div>
  );
};
