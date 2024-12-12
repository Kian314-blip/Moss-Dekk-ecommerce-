import { useState, useEffect } from 'react';
import TimeSlotSelector from './TimeSlotSelector'; // Import the TimeSlotSelector
import Calendar_larrow from '@/svg/Calendar_larrow';
import Calendar_rarrow from '@/svg/Calendar_rarrow';
import Calendar_x from '@/svg/Calendar_x';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import axios from 'axios';
import LoadingComponent from "@/components/onLoad"
const backend_url = process.env.NEXT_PUBLIC_API_URL;

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getDaysInMonth = (month: number, year: number) => {
  return new Date(year, month + 1, 0).getDate();
};

interface CalendarProps {
  onDateTimeSelected: (dateTime: string) => void;
  closeCalendar: () => void;
}

const Calendar: React.FC<CalendarProps> = ({ onDateTimeSelected, closeCalendar }) => {
  const [loading, setLoading] = useState(false);

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [firstMonthIndex, setFirstMonthIndex] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [selectedDay, setSelectedDay] = useState<{ day: number; month: number } | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [closed, setClosed] = useState<boolean>(false);

  const secondMonthIndex = (firstMonthIndex + 1) % 12;
  const secondMonthYear = firstMonthIndex === 11 ? year + 1 : year;

  const updateCalendars = (offset: number) => {
    setFirstMonthIndex((prevIndex) => {
      let newIndex = prevIndex + offset;

      if (newIndex > 11) {
        setYear((prevYear) => prevYear + 1);
        newIndex = newIndex % 12;
      } else if (newIndex < 0) {
        setYear((prevYear) => prevYear - 1);
        newIndex = (newIndex + 12) % 12;
      }

      return newIndex;
    });
  };

  const isPastDate = (day: number, monthIndex: number, year: number) => {
    const date = new Date(year, monthIndex, day - cartItems[0]?.delay || 0).getTime();
    const todayAtMidnight = new Date().setHours(0, 0, 0, 0);
    return date < todayAtMidnight;
  };

  const renderDays = (monthIndex: number, year: number) => {
    const daysInMonth = getDaysInMonth(monthIndex, year);
    const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const firstDayOfMonth = new Date(year, monthIndex, 1).getDay();
    const emptyDays = Array.from({ length: firstDayOfMonth }, () => null);

    return (
      <div className="grid grid-cols-7 gap-[8px] max-[772px]:w-[334px]">
        {weekdays.map((day) => (
          <div key={day} className="text-center text-sm leading-3 font-semibold text-black pb-[12px]">{day}</div>
        ))}
        {emptyDays.map((_, index) => (
          <div key={index} className="text-center"></div>
        ))}
        {daysArray.map((day) => {
          const isWeekend = new Date(year, monthIndex, day).getDay() === 0 || new Date(year, monthIndex, day).getDay() === 6;
          const isDisabled = isPastDate(day, monthIndex, year);
          return (
            <div
              key={day}
              className={`text-center cursor-pointer text-base leading-6 font-normal text-[#73C018] ${selectedDay?.day === day && selectedDay.month === monthIndex ? 'bg-blue-300' : ''
                } ${isDisabled ? 'text-[#888888] cursor-not-allowed' : ''}`}
              onClick={() => {
                if (!isDisabled) {
                  setSelectedDay({ day, month: monthIndex });
                  getTimeslot(day, monthIndex); // Pass the correct monthIndex for slot fetching
                }
              }}
            >
              {day}
            </div>
          );
        })}
      </div>
    );
  };

  const handleTimeSlotSelection = (time: string) => {
    setSelectedTimeSlot(time);
    if (selectedDay) {
      // Ensure month is correctly adjusted
      const dateTime = `${year}/${(selectedDay.month + 1).toString().padStart(2, '0')}/${selectedDay.day.toString().padStart(2, '0')} ${time}`;
      onDateTimeSelected(dateTime);
      closeCalendar();
    }
  };

  // Fetch the time slots with corrected month handling
  const getTimeslot = async (day: number, monthIndex: number) => {
    setLoading(true)
    // Correct the month to be 1-indexed for the API request
    const formattedDate = `${year}/${(monthIndex + 1).toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`;
    const datestring = new Date(formattedDate);
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayofWeek = daysOfWeek[datestring.getDay()];

    try {
      const formDataParams = new URLSearchParams();
      formDataParams.append('method', 'getTimeSlots');
      formDataParams.append('day', dayofWeek);
      formDataParams.append('date', formattedDate); // Use corrected formatted date
      formDataParams.append('serviceIDs', "");
      formDataParams.append('serviceCounts', "");
      formDataParams.append('locationID', '18');
      formDataParams.append('type', 'dekk');
      formDataParams.append('workType', 'tyreChangeDekkhotell');

      const response = await axios.post(`${backend_url}/queryNewSite.php`, formDataParams, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.data[0] === "closed") {
        setLoading(false)

        setClosed(true);
      } else {
        setClosed(false);

        const htmlString = response.data;

        const timeSlots = [];
        const regex = /saveTimeDekk\('(\d{2}:\d{2})',/g;
        let match;

        while ((match = regex.exec(htmlString)) !== null) {
          timeSlots.push(match[1]);
        }

        setTimeSlots(timeSlots);
        setLoading(false)

      }
    } catch (error) {
      console.error('Error fetching time slots:', error);
    }
  };

  useEffect(() => {
    if (selectedDay) {
      // Adjusted to pass the monthIndex properly
      getTimeslot(selectedDay.day, selectedDay.month);
    }
  }, [selectedDay]);

  return (
    <div className="pt-[64px] pl-[14px] pr-[13px] pb-[18px] relative rounded max-[772px]:p-0">
      <div className="grid grid-cols-2 gap-[56px] max-[772px]:grid-cols-1">
        <div className='absolute top-[18px] right-[13px] max-[772px]:top-[-45px] cursor-pointer' onClick={closeCalendar}>
          <Calendar_x />
        </div>

        {/* First Month */}
        <div className="max-[772px]:flex max-[772px]:flex-col max-[772px]:items-center">
          <div className='pb-[32px] flex flex-row gap-[84px] items-center max-[772px]:gap-0 max-[772px]:justify-between max-[772px]:w-[334px]'>
            <button onClick={() => updateCalendars(-1)} className="p-[8px] text-white border-[#73C018] border-[1px] rounded">
              <Calendar_rarrow />
            </button>
            <h3 className="text-sm leading-5 text-[#4A5660] font-semibold">{months[firstMonthIndex]} {year}</h3>
          </div>
          {renderDays(firstMonthIndex, year)}
        </div>

        {/* Second Month */}
        <div className="max-[772px]:flex max-[772px]:flex-col max-[772px]:items-center">
          <div className='pb-[32px] flex flex-row gap-[84px] items-center max-[772px]:gap-0 max-[772px]:justify-between max-[772px]:w-[334px]'>
            <h3 className="text-sm leading-5 text-[#4A5660] font-semibold">
              {months[secondMonthIndex]} {secondMonthYear}
            </h3>
            <button onClick={() => updateCalendars(1)} className="p-[8px] text-white border-[#73C018] border-[1px] rounded">
              <Calendar_larrow />
            </button>
          </div>
          {renderDays(secondMonthIndex, secondMonthYear)}
        </div>
      </div>
      {
        closed ?
          <div className='text-black pt-3'>No employees available at this date</div> :
          <TimeSlotSelector timeSlots={timeSlots} onTimeSlotSelected={handleTimeSlotSelection} />
      }

      <div className='pt-[20px] flex flex-col max-[772px]:hidden'>
        <p className='text-base leading-6 font-medium text-[#6D6D6D]'>*Note:</p>
        <div className='flex flex-row gap-[4px] items-center pt-[10px]'>
          <div className='w-[11px] h-[11px] bg-[#EF4225] rounded'></div>
          <p className='text-xs leading-4 font-normal font-["Inter"] text-[#6D6D6D]'>Time not available</p>
        </div>
        <div className='flex flex-row gap-[4px] items-center pt-[8px]'>
          <div className='w-[11px] h-[11px] bg-[#73C018] rounded'></div>
          <p className='text-xs leading-4 font-normal font-["Inter"] text-[#6D6D6D]'>Available time</p>
        </div>
      </div>
      {loading && <LoadingComponent />}

    </div>
  );
};

export default Calendar;
