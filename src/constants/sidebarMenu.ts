import {
  AppointmentIcon,
  BedroomIcon,
  DashboardIcon,
  LabelIcon,
  MedicineIcon,
  QuestionIcon,
  ScheduleIcon,
  SettingsIcon,
  TransactionIcon,
  UserGroupIcon,
} from "../components/icons/Icons";

export interface SidebarMenuInterface {
  id: number;
  name: string;
  icon: React.ComponentType<any>;
  link: string;
}

export const sidebarMenuDataPrimary: SidebarMenuInterface[] = [
  {
    id: 1,
    name: "Dashboard",
    icon: DashboardIcon,
    link: `${process.env.REACT_APP_BASE_URL}`,
  },
  {
    id: 2,
    name: "Schedule",
    icon: ScheduleIcon,
    link: "/schedule",
  },
  {
    id: 3,
    name: "Transaction",
    icon: TransactionIcon,
    link: "/transaction",
  },
];

export const sidebarMenuSecondary: SidebarMenuInterface[] = [
  {
    id: 1,
    name: "Bedroom",
    icon: BedroomIcon,
    link: "/bedroom",
  },
  {
    id: 2,
    name: "Medicine",
    icon: MedicineIcon,
    link: "/medicine",
  },
  {
    id: 3,
    name: "Appointment",
    icon: AppointmentIcon,
    link: "/appointment",
  },
  {
    id: 4,
    name: "Patient",
    icon: UserGroupIcon,
    link: "/patient",
  },
  {
    id: 5,
    name: "Doctor",
    icon: LabelIcon,
    link: "/doctor",
  },
];

export const sidebarMenuLast: SidebarMenuInterface[] = [
  {
    id: 1,
    name: "Settings",
    icon: SettingsIcon,
    link: "/settings",
  },
  {
    id: 2,
    name: "Help & Support",
    icon: QuestionIcon,
    link: "/settings",
  },
];
