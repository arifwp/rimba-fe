import React, { useEffect, useState } from "react";
import { Button } from "./buttons/Button";
import { AppointmentCard } from "./cards/AppointmentCard";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const generateCalendar = (month: number, year: number) => {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendar: (number | null)[] = Array(firstDay).fill(null); // Fill leading blanks
  for (let i = 1; i <= daysInMonth; i++) {
    calendar.push(i);
  }
  return calendar;
};

export const Calendar: React.FC = () => {
  const today = new Date();
  const [selected, setSelected] = useState<number | null>(null);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const calendarDays = generateCalendar(currentMonth, currentYear);

  const handlePrev = () => {
    setCurrentMonth((prev) => {
      if (prev === 0) {
        setCurrentYear((year) => year - 1);
        return 11;
      }
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentMonth((prev) => {
      if (prev === 11) {
        setCurrentYear((year) => year + 1);
        return 0;
      }
      return prev + 1;
    });
  };

  useEffect(() => {
    console.log("select", selected);
  }, [selected]);

  return (
    <>
      <div className="w-full p-4 flex flex-col border-2 border-borderColor rounded-b-none rounded-xl lg:rounded-2xl lg:rounded-b-none">
        <div className="flex items-center justify-between mb-4">
          <Button
            onClick={handlePrev}
            className="p-2 border-2 border-borderColor rounded hover:bg-gray-300"
            title="&lt;"
          />

          <h2 className="text-xl font-semibold">
            {new Date(currentYear, currentMonth).toLocaleString("default", {
              month: "long",
            })}{" "}
            {currentYear}
          </h2>

          <Button
            onClick={handleNext}
            className="p-2 border-2 border-borderColor rounded hover:bg-gray-300"
            title="&gt;"
          />
        </div>
        <div className="grid grid-cols-7 gap-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center font-semibold">
              {day}
            </div>
          ))}

          {calendarDays.map((day, idx) => (
            <div
              key={idx}
              className={`w-12 h-12 aspect-square flex items-center justify-center rounded-full cursor-pointer ${
                day ? "hover:bg-gray-300" : "bg-transparent"
              } ${
                selected === day ? `bg-darkBlue text-white` : `bg-transparent`
              }`}
              onClick={() => {
                selected === day ? setSelected(null) : setSelected(day);
              }}
            >
              {day}
            </div>
          ))}
        </div>
      </div>

      <AppointmentCard />
    </>
  );
};
