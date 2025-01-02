import { AppointmentIcon, DotHorizontalIcon } from "../icons/Icons";

export const DemandClinicsCard = () => {
  return (
    <div className="w-full p-4 flex flex-1 flex-col border-2 border-borderColor rounded-xl lg:rounded-2xl">
      <div className="w-full flex flex-row justify-between items-center">
        <div className="gap-1 flex flex-row items-center">
          <AppointmentIcon className="text-red-400" />

          <p className="text-xl font-medium text-darkBlue">
            Top 3 in-demand clinics
          </p>
        </div>

        <DotHorizontalIcon />
      </div>
    </div>
  );
};
