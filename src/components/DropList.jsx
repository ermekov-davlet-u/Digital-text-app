import React from "react";

function DropList({ list, onValueChange }) {
  return (
    <>
      <div
        className="droplist"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="droplist__container">
          <div className="droplist__items">
            {list.map((item, index) => {
              return (
                <div className="droplist__item" key={item.code } onClick={() => {
                  onValueChange(item)
                }}>
                  {
                    item.name
                  }
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default DropList;
