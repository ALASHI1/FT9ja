// /* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import { useState, useEffect } from "react";

function ReportsLineChartData() {

// const [balance, setBalance] = useState([]);
// const [equity, setEquity] = useState([]);
// const [time, setTime] = useState([]);
const [info, setInfo] = useState([{Equity: 5910.67, Balance: 5052.16, Time: '23:57:15'}]);



useEffect(() => {
  getEquAndBalAndTime()
  let interval = setInterval(() => {
    getEquAndBalAndTime()
  }, 294000);
  return () => clearInterval(interval);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


let getEquAndBalAndTime = async() => {
  await axios.get("api/getinfo")
  .then(res => {
    setInfo(res.data);
  }
  )
  .catch(err => {
    console.log(err);
  }
  );
}

return({
      sales: {
        labels: info.map(item => item.Time),
        datasets: { label: "Equity", data: info.map(item => item.Equity) },
      },
      tasks: {
        labels: info.map(item => item.Time),
        datasets: { label: "Balance", data: info.map(item => item.Balance) },
      },
})
}
export default ReportsLineChartData;
