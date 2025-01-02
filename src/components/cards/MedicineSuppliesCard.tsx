import { medicineSuppliesData } from "../../constants/contentDashboard";
import { DotHorizontalIcon, LabelIcon } from "../icons/Icons";
import { PercentageCard } from "./PercentageCard";

export const MedicineSuppliesCard = () => {
  return (
    <div className="w-full p-4 flex flex-1 flex-col border-2 border-borderColor rounded-xl lg:rounded-2xl">
      <div className="w-full flex flex-row justify-between items-center">
        <div className="gap-1 flex flex-row items-center">
          <LabelIcon className="text-green-400 w-6 h-6" />

          <p className="text-xl font-medium text-darkBlue">Medicine Supplies</p>
        </div>

        <DotHorizontalIcon />
      </div>

      <table className="table-auto w-full border-separate border-spacing-y-4">
        <thead className="mb-4">
          <tr>
            <th className="uppercase text-xs font-normal text-left text-softBlue">
              NAME
            </th>
            <th className="uppercase text-xs font-normal text-left text-softBlue">
              STOCK
            </th>
            <th className="uppercase text-xs font-normal text-left text-softBlue">
              LAST MONTH
            </th>
          </tr>
        </thead>

        <tbody className="mt-4">
          {medicineSuppliesData.map((item) => (
            <tr key={item.id} className="hover:bg-gray-300 cursor-pointer">
              <td>
                <div className="w-fit gap-2 flex flex-row items-center">
                  <img
                    src={item.img}
                    className="w-8 md:w-12 rounded-md object-cover aspect-square p-0.5 border-2 border-borderColor "
                    alt={item.name}
                  />

                  <p className="text-sm text-darkBlue">{item.name}</p>
                </div>
              </td>
              <td className="text-softBlue">{item.stock}</td>
              <td>
                <PercentageCard
                  className="w-fit"
                  percentage={item.percentage}
                  typePercentage={item.typePercentage}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
