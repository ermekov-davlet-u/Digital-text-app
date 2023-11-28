import React, { useEffect, useState } from "react";

function ConfirmModal({ children, show, close, title }) {
  const style = {
    show: {
      visibility: "visible",
      opacity: 1,
    },
    hide: {
      visibility: "hidden",
      opacity: 0,
    },
  };
  useEffect(() => {
    return () => {};
  });

  return (
    <div className="container">
      <div className="popup" id="popup" style={show ? style.show : style.hide}>
        <div className="popup-inner">
          <div className="popup__text">
            <h1>{title ?? "Модальное окошко"}</h1>
            {
              children
            }
          </div>
          <a className="popup__close" href="#" onClick={close}>
            X
          </a>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
