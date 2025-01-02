import {
  AppointmentIcon,
  BedroomIcon,
  LabelIcon,
  UserGroupIcon,
} from "../components/icons/Icons";

export interface SummaryCardInterface {
  id: number;
  icon: React.ComponentType<any>;
  title: string;
  value: string;
  maxValue?: string;
  percentage: string;
  typePercentage: number; // 0=down, 1=up
}

export const summaryCardData: SummaryCardInterface[] = [
  {
    id: 1,
    icon: UserGroupIcon,
    title: "Overall visitor",
    value: "1,478",
    percentage: "15%",
    typePercentage: 1,
  },
  {
    id: 2,
    icon: LabelIcon,
    title: "Total doctors",
    value: "210",
    percentage: "2.5%",
    typePercentage: 0,
  },
  {
    id: 3,
    icon: AppointmentIcon,
    title: "Book appointment",
    value: "321",
    percentage: "3.5%",
    typePercentage: 1,
  },
  {
    id: 4,
    icon: BedroomIcon,
    title: "Room availability",
    value: "213",
    maxValue: "335",
    percentage: "1.5%",
    typePercentage: 0,
  },
];

export interface PatientOverviewInterface {
  totalPatients: number;
  avgPatients: number;
  avgCare: number;
}

export const patientOverviewData: PatientOverviewInterface = {
  totalPatients: 839,
  avgPatients: 283,
  avgCare: 421,
};

export interface MedicineSuppliesInterface {
  id: number;
  name: string;
  img: string;
  stock: number;
  percentage: string;
  typePercentage: number; // 0=down, 1=up
}

export const medicineSuppliesData: MedicineSuppliesInterface[] = [
  {
    id: 1,
    name: "Paracetamol",
    img: "https://placehold.co/800",
    stock: 140,
    percentage: "2.5%",
    typePercentage: 0,
  },
  {
    id: 2,
    name: "Anastrozole",
    img: "https://placehold.co/800",
    stock: 123,
    percentage: "3.5%",
    typePercentage: 1,
  },
  {
    id: 3,
    name: "Amoxicillin",
    img: "https://placehold.co/800",
    stock: 80,
    percentage: "2.5%",
    typePercentage: 0,
  },
  {
    id: 4,
    name: "Bisoprolol",
    img: "https://placehold.co/800",
    stock: 60,
    percentage: "3.5%",
    typePercentage: 1,
  },
  {
    id: 5,
    name: "Clonidine",
    img: "https://placehold.co/800",
    stock: 54,
    percentage: "2.5%",
    typePercentage: 0,
  },
];

export interface AppointmentInterface {
  id: number;
  img: string;
  name: string;
  specialist: string;
  todaySchedule: string;
}

export const appointmentData: AppointmentInterface[] = [
  {
    id: 1,
    img: "https://randomuser.me/api/portraits/men/12.jpg",
    name: "Esther Howard",
    specialist: "Poly dental",
    todaySchedule: "09.40",
  },
  {
    id: 2,
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Ariane McCoy",
    specialist: "Psychiatrist",
    todaySchedule: "09.40",
  },
  {
    id: 3,
    img: "https://randomuser.me/api/portraits/men/24.jpg",
    name: "Guy Hawkins",
    specialist: "Internist",
    todaySchedule: "09.40",
  },
  {
    id: 4,
    img: "https://randomuser.me/api/portraits/men/43.jpg",
    name: "Courtney Henry",
    specialist: "Ophtahalmologist",
    todaySchedule: "09.40",
  },
  {
    id: 5,
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Annette Black",
    specialist: "Neurologist",
    todaySchedule: "09.40",
  },
];
