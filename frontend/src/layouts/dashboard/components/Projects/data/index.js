/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import axios from "axios";
import { useState, useEffect } from "react"; 


// @mui material components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Images
import iconBulb from "assets/images/small-logos/icon-bulb.svg";

export default function Data() {
  const [balance, setBalance] = useState([5052.16]);
  const [equity, setEquity] = useState([5558.67]);
  const [time, setTime] = useState(['17:49:07']);

  
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

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );
  return {
    columns: [
      { Header: "Equity", accessor: "Equity", width: "45%", align: "left" },
      { Header: "Balance", accessor: "Balance", width: "10%", align: "left" },
      { Header: "Time", accessor: "Time", align: "center" },
    ],


    rows: [
      {
        Equity: <Company image={iconBulb} name={equity[1]}/>,
        Balance: <MDTypography variant="caption" color="text" fontWeight="medium">
        {balance[1]}
              </MDTypography>,   
        Time: <MDBox display="flex" py={1}>{time[1]}</MDBox>,
      },
      {
        Equity: <Company image={iconBulb} name={equity[2]}/>,
        Balance: <MDTypography variant="caption" color="text" fontWeight="medium">
        {balance[2]}
              </MDTypography>,   
        Time: <MDBox display="flex" py={1}>{time[2]}</MDBox>,
      },
      {
        Equity: <Company image={iconBulb} name={equity[3]}/>,
        Balance: <MDTypography variant="caption" color="text" fontWeight="medium">
        {balance[3]}
              </MDTypography>,   
        Time: <MDBox display="flex" py={1}>{time[3]}</MDBox>,
      },
      {
        Equity: <Company image={iconBulb} name={equity[4]}/>,
        Balance: <MDTypography variant="caption" color="text" fontWeight="medium">
        {balance[4]}
              </MDTypography>,   
        Time: <MDBox display="flex" py={1}>{time[4]}</MDBox>,
      },
      {
        Equity: <Company image={iconBulb} name={equity[5]}/>,
        Balance: <MDTypography variant="caption" color="text" fontWeight="medium">
        {balance[5]}
              </MDTypography>,   
        Time: <MDBox display="flex" py={1}>{time[5]}</MDBox>,
      },
    ]
  };
}
