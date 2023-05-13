import Search from "./Search";
import Calendar from "react-calendar";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";

const StyledCalendar = styled(Calendar)`
  & .react-calendar {
    border: 1px solid #ccc;
    font-family: Arial, sans-serif;
    border-radius: 5px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  & .react-calendar__month-view__days__day {
    font-size: 16px;
    font-weight: bold;
  }

  & .react-calendar__tile--now {
    background-color: #b3d9ff;
  }
`;

function Plan(){
    return<>
    <Search/>
    Plan
    <StyledCalendar/>
    </>
}

export default Plan;