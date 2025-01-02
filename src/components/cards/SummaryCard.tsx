import { DotHorizontalIcon } from "../icons/Icons";
import { PercentageCard } from "./PercentageCard";

interface Props {
  icon: React.ReactNode;
  title: string;
  value: string;
  maxValue?: string;
  percentage: string;
  typePercentage: number; // 0=down, 1=up
  className?: string;
}

export const SummaryCard = ({
  icon,
  title,
  value,
  maxValue,
  percentage,
  typePercentage,
  className,
}: Props) => {
  return (
    <div
      className={`w-full p-4 border-2 border-borderColor rounded-xl lg:rounded-2xl flex flex-col ${className}`}
    >
      <div className="w-full flex flex-row justify-between">
        <div className=" gap-2 flex flex-row">
          {icon}

          <p className="text-sm">{title}</p>
        </div>

        <DotHorizontalIcon />
      </div>

      <div className="w-full mt-2 md:mt-4 flex flex-row">
        <p className="font-semibold text-2xl">{value}</p>

        {maxValue && (
          <div className="ml-1 gap-1 flex flex-row">
            <p className="font-semibold text-lg self-end text-softBlue">/</p>

            <p className="font-semibold text-lg self-end text-softBlue">
              {maxValue}
            </p>
          </div>
        )}
      </div>

      <div className="w-full mt-2 gap-12 flex flex-row justify-between">
        <p className="text-softBlue text-xs">Compare with last month</p>

        <PercentageCard
          percentage={percentage}
          typePercentage={typePercentage}
        />
      </div>
    </div>
  );
};
