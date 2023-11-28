import { Calendar } from "primereact/calendar";
import { Checkbox } from "primereact/checkbox";
import React, { useState } from "react";
function MyCalendar({ controls, data, setData, close }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="calendar">
      <div className="calendar-content__container">
        {controls.map((item) => {
          return (
            <Calendar
              showOtherMonths
              value={data[item.name]}
              name={item.name}
              onChange={(e) =>
                setData((state) => ({ ...state, [item.name]: e.value }))
              }
              inline
              minDate={item.minDate ?? new Date()}
              className="my-calendar"
            />
          );
        })}

        {/* <Calendar
          showOtherMonths
          name="endDate"
          value={date.endDate}
          onChange={(e) =>
            setDate((state) => ({ ...state, [e.target.name]: e.value }))
          }
          inline
          minDate={new Date()}
          className="my-calendar"
        /> */}
      </div>
      <div className="calendar-footer">
        <div className="calendar-footer__left">
          <Checkbox
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
          ></Checkbox>
          <p className="calendar-footer__text">Без конечной даты</p>
        </div>
        <button className="calendar-footer__btn" onClick={() => [close()]}>
          Готово
        </button>
      </div>
    </div>
  );
}

export default MyCalendar;
