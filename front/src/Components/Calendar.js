import { useState } from "react";
import { DatePicker } from "@mui/lab";
import { TextField } from "@mui/material";

function Calendar() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDateChange = (date) => {
    if (!startDate) {
      setStartDate(date);
    } else if (startDate && !endDate) {
      if (date > startDate) {
        setEndDate(date);
      } else {
        setEndDate(startDate);
        setStartDate(date);
      }
    } else if (startDate && endDate) {
      setStartDate(date);
      setEndDate(null);
    }
  };

  return (
    <DatePicker
      label="날짜 선택"
      value={startDate}
      onChange={handleDateChange}
      renderInput={(params) => <TextField {...params} />}
    />
  );
}
export default Calendar;