import React, {  } from "react";

function MyButton({ control }) {
  return (
    <>
      <button className="calendar-footer__btn" onClick={control.onClick}>{control.title}</button>
    </>
  );
}

export default MyButton;