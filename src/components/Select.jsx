import React, { useEffect, useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import DropList from "./DropList";

export default function SelectComponent({ control, err }) {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.querySelector("body").addEventListener("click", () => {
      setOpen(false);
    });
  }, []);
  console.log(err);
  return (
    <div
      className="country"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div
        className="form-group"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="form-group__label">{control.label}</div>
        <div className="form-group__inp">
          <div className="form-group__inp__icon">{control.icon}</div>
          <input className="form-group__inp__text" onChange={(e) => {
            control.onFilter(e.target.value)
          }} placeholder={selectedCountry?.name ??
              control?.placeholder ??
              selectedCountry?.name ??
              "Выберите"}>
            
          </input>
        </div>
      </div>
      {err.err && err[control.name] ? (
        <div className="err">{err[control.name]}</div>
      ) : (
        ""
      )}
      {open && (
        <DropList
          list={control.list}
          onValueChange={(value) => {
            setSelectedCountry(value);
            control.onChange(value);
            setOpen(false);
          }}
        />
      )}
    </div>
  );
}
