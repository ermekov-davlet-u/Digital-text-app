import React, { useState } from "react";
import "./App.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider } from "primereact/api";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";
import SelectComponent from "./components/Select";
import MultipleDateComponent from "./components/Dates";
import "./components/component.css";
import MyButton from "./components/Button";
import ConfirmModal from "./components/Modal";
import { FaLocationDot } from "react-icons/fa6";
import dayjs from "dayjs";
import cities from 'cities.json';



function App() {
  const [data, setData] = useState({
    startDate: null,
    endDate: null,
    from: null,
    to: null,
  });
  const [ filter, setFilter ] = useState({
    from: "",
    to: ""
  })
  const [err, setErr] = useState({
    err: false,
    errDetail: null,
  });
  const [show, setShow] = useState(false);

  return (
    <PrimeReactProvider>
      <div className="main">
        <div className="widget">
          <SelectComponent
            control={{
              label: "Откуда",
              placeholder: "São Paulo, São Paulo",
              value: null,
              name: "from",
              icon: <FaLocationDot />,
              onChange: (value) => {
                console.log(value);
                setData((state) => ({ ...state, from: value }));
              },
              onFilter(value){
                setFilter(state => ({...state, from: value}))
              },
              list: filter.from ? cities.filter(item => {
                return item?.name?.includes(filter.from)
              }).slice(0, 50) : cities.slice(0, 50)
            }}
            err={err}
          />
          <SelectComponent
            control={{
              label: "Откуда",
              placeholder: "São Paulo, São Paulo",
              value: null,
              name: "to",
              icon: <FaLocationDot />,
              onChange: (value) => {
                console.log(value);
                setData((state) => ({ ...state, to: value }));
              },
              onFilter(value){
                setFilter(state => ({...state, to: value}))
              },
              list: filter.from ? cities.filter(item => {
                return item?.name?.includes(filter.to)
              }).slice(0, 50) : cities.slice(0, 50)
            }}
            err={err}
          />
          <MultipleDateComponent
            data={data}
            setData={setData}
            err={err}
            control={{
              title: "Даты",
              controls: [
                {
                  name: "startDate",
                  label: "Дата начала",
                  onChange() {},
                },
                {
                  name: "endDate",
                  label: "Дата конца",
                  onChange() {},
                },
              ],
            }}
          />
          <MyButton
            control={{
              title: "Найти",
              onClick: () => {
                let hasError = false;
                for (let key in data) {
                  if (data.hasOwnProperty(key)) {
                    if (data[key] == null || data[key] == undefined) {
                      setErr({
                        err: true,
                        errDetail: {
                          [key]: "Отсутвует значение",
                        },
                      });
                      hasError = true;
                    }
                  }
                }
                if (!hasError) setShow(!show);
              },
            }}
          />
        </div>
      </div>
      <ConfirmModal
        show={show}
        close={() => {
          setShow(false);
        }}>
        <div className="card">
          <div className="card_data">
            <div className="card_title">Откуда: </div>
            <div className="card_value">{data?.from?.name}</div>
          </div>
          <div className="card_data">
            <div className="card_title">Куда: </div>
            <div className="card_value">{data?.to?.name}</div>
          </div>
          <div className="card_data">
            <div className="card_title">Дата: </div>
            <div className="card_value">{dayjs(data.startDate ?? new Date()).format("dd D, YYYY")}</div>
          </div>
          <div className="card_data">
            <div className="card_title">Дата: </div>
            <div className="card_value">{dayjs(data.endDate ?? new Date()).format("dd D, YYYY")}</div>
          </div>
        </div>
      </ConfirmModal>
    </PrimeReactProvider>
  );
}

export default App;
