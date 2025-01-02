import { appointmentData } from "../../constants/contentDashboard";
import { AppointmentIcon, DotHorizontalIcon } from "../icons/Icons";

export const AppointmentCard = () => {
  return (
    <div className="w-full p-4 border-l-2 border-r-2 border-b-2 border-borderColor rounded-t-none lg:rounded-t-none rounded-xl lg:rounded-2xl">
      <div className="w-full flex flex-row justify-between items-center">
        <div className="gap-1 flex flex-row items-center">
          <AppointmentIcon className="text-blue-400 w-6 h-6" />

          <p className="text-xl font-medium text-darkBlue">Appointment</p>
        </div>

        <DotHorizontalIcon />
      </div>

      <div className="w-full mt-4 space-y-2">
        {appointmentData.map((item) => (
          <div
            key={item.id}
            className="w-full p-2 rounded-lg flex flex-row items-center justify-between hover:bg-gray-300 cursor-pointer"
          >
            <div className="gap-2 md:gap-4 flex flex-row">
              <img
                className="w-10 h-10 rounded-full aspect-square"
                src={item.img}
                alt={item.name}
              />

              <div className="flex flex-col">
                <p className="text-md font-semibold text-darkBlue">
                  {item.name}
                </p>

                <p className="text-sm text-softBlue">{item.specialist}</p>
              </div>
            </div>

            <div className="flex flex-col">
              <p className="text-sm text-softBlue">Today</p>

              <p className="text-md text-darkBlue">{item.todaySchedule}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
