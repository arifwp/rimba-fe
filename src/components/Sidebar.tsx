import { useRef, useState } from "react";
import { ButtonSidebar } from "./ButtonSidebar";
import { SearchInput } from "./inputs/SearchInput";
import {
  sidebarMenuDataPrimary,
  sidebarMenuLast,
  sidebarMenuSecondary,
} from "../constants/sidebarMenu";

export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ButtonSidebar
        sidebarRef={sidebarRef}
        isOpenSidebar={isSidebarOpen}
        onOpenSidebar={(isOpen) => {
          setIsSidebarOpen(isOpen);
        }}
      />

      <aside
        ref={sidebarRef}
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full bg-softGray border-r-2 border-borderColor overflow-y-auto">
          <div className="w-full h-[72px] border-b-2 border-borderColor flex items-center">
            <a
              href={`${process.env.REACT_APP_BASE_URL}`}
              className="p-4 flex gap-2 items-center"
            >
              <div className="p-2 bg-darkBlue rounded-lg">
                <img
                  src="/images/logo.svg"
                  className="w-4 object-contain aspect-square"
                  alt="Mediocore Logo"
                />
              </div>

              <span className="text-xl text-darkBlue font-bold whitespace-nowrap">
                Mediocore
              </span>
            </a>
          </div>

          <div className="h-header-height flex flex-col justify-between">
            <div className="w-full p-4">
              <SearchInput />

              <ul className="mt-4 font-medium text-darkBlue text-md">
                <li>
                  {sidebarMenuDataPrimary.map((item) => (
                    <a
                      key={item.id}
                      href={`${process.env.REACT_APP_BASE_URL}`}
                      className="mb-2 p-2 flex items-center rounded-lg hover:bg-darkGray group"
                    >
                      <item.icon />

                      <span className="flex-1 ms-3 whitespace-nowrap">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </li>
              </ul>

              <p className="mt-8 font-semibold text-sm text-softBlue leading-6">
                MANAGEMENT
              </p>

              <ul className="mt-2 font-medium text-darkBlue text-md">
                <li>
                  {sidebarMenuSecondary.map((item) => (
                    <a
                      key={item.id}
                      href={`${process.env.REACT_APP_BASE_URL}`}
                      className="mb-2 p-2 flex items-center rounded-lg hover:bg-darkGray group"
                    >
                      <item.icon />

                      <span className="flex-1 ms-3 whitespace-nowrap">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </li>
              </ul>
            </div>

            <div className="w-full">
              <div className="w-full p-4">
                <ul className="mt-2 font-medium text-darkBlue text-md">
                  <li>
                    {sidebarMenuLast.map((item) => (
                      <a
                        key={item.id}
                        href={`${process.env.REACT_APP_BASE_URL}`}
                        className="mb-2 p-2 flex items-center rounded-lg hover:bg-darkGray group"
                      >
                        <item.icon />

                        <span className="flex-1 ms-3 whitespace-nowrap">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </li>
                </ul>
              </div>

              <div className="w-full border-t-2 border-borderColor">
                <div className="w-full p-4 flex flex-row justify-between items-center">
                  <div className="gap-4 flex flex-row cursor-pointer">
                    <img
                      className="aspect-square rounded-full w-12"
                      src="https://randomuser.me/api/portraits/men/75.jpg"
                      alt="Avatar"
                    />

                    <div className="flex flex-col gap-0">
                      <p className="text-darkBlue font-medium">Mediocore</p>

                      <p className="text-softBlue">Admin</p>
                    </div>
                  </div>

                  <svg
                    className="w-8 h-8 text-softBlue cursor-pointer"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
