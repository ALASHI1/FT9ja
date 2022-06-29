// /* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { useState, useEffect } from "react";

function ReportsLineChartData() {

const [balance, setBalance] = useState([]);
const [equity, setEquity] = useState([]);
const [time, setTime] = useState([]);



useEffect(() => {
  getEquAndBalAndTime()
  let interval = setInterval(() => {
    getEquAndBalAndTime()
  }, 294000);
  return () => clearInterval(interval);
}, []);


let getEquAndBalAndTime = () => {
  axios.get("api/getinfo")
  .then(res => {
    setBalance (res.data.map(item => item.Balance));
    setEquity(res.data.map(item => item.Equity));
    setTime(res.data.map(item => item.Time));
  }
  )
  .catch(err => {
    console.log(err);
  }
  );
}

return({
      sales: {
        labels: time,
        datasets: { label: "Equity", data: equity },
      },
      tasks: {
        labels: time,
        datasets: { label: "Balance", data: balance },
      },
})
}
export default ReportsLineChartData;
