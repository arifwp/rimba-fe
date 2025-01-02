import { Button } from "./buttons/Button";
import { DownloadIcon, PlusIcon } from "./icons/Icons";

export const Navbar = () => {
  return (
    <div className="w-full md:h-[72px] border-b-2 border-borderColor flex items-center overflow-y-hidden">
      <div className="w-full p-4 gap-4 flex flex-col md:flex-row items-stretch justify-between">
        <p className="font-bold text-xl md:text-2xl">
          Welcome back, Darrell!👋
        </p>

        <div className="gap-4 flex flex-row">
          <Button
            className="py-1 px-3 text-sm"
            title="Export CSV"
            leftIcon={<DownloadIcon />}
          />

          <Button
            className="py-1 px-3 border-0 bg-darkBlue text-white text-sm"
            title="Add new"
            leftIcon={<PlusIcon />}
          />
        </div>
      </div>
    </div>
  );
};
