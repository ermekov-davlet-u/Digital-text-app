import React, { useEffect, useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import dayjs from "dayjs";
import MyCalendar from "./Calendar";

export default function InlineDemo({ control, data, setData, err }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="datePicker">
      <div
        className="form-group"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="form-group__label">{control.title}</div>
        <div
          className="form-group__dates-inp"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div className="form-group__inp">
            <div className="form-group__inp__icon">
              <CiCalendarDate />
            </div>
            <div className="form-group__inp__text">
              {dayjs(data.startDate ?? new Date()).format("dd D, YYYY")}
            </div>
          </div>
          <hr />
          <div className="form-group__inp">
            <div className="form-group__inp__icon">
              <CiCalendarDate />
            </div>
            <div className="form-group__inp__text">
              {dayjs(data.endDate ?? new Date()).format("dd D, YYYY")}
            </div>
          </div>
        </div>
      </div>
      {open && (
        <MyCalendar
          controls={control.controls}
          data={data}
          setData={setData}
          close={() => {
            setOpen(false);
          }}
        />
      )}
    </div>
  );
}
