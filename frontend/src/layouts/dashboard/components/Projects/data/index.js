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
  const [info, setInfo] = useState([{Equity: 5910.67, Balance: 5052.16, Time: '23:57:15'}]);
  
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
      setInfo(res.data);
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
        Equity: <Company image={iconBulb} name={info.map(item => item.Equity)[1]}/>,
        Balance: <MDTypography variant="caption" color="text" fontWeight="medium">
        {info.map(item => item.Balance)[1]}
              </MDTypography>,   
        Time: <MDBox display="flex" py={1}>{info.map(item => item.Time)[1]}</MDBox>,
      },
      {
        Equity: <Company image={iconBulb} name={info.map(item => item.Equity)[2]}/>,
        Balance: <MDTypography variant="caption" color="text" fontWeight="medium">
        {info.map(item => item.Balance)[2]}
              </MDTypography>,   
        Time: <MDBox display="flex" py={1}>{info.map(item => item.Time)[2]}</MDBox>,
      },
      {
        Equity: <Company image={iconBulb} name={info.map(item => item.Equity)[3]}/>,
        Balance: <MDTypography variant="caption" color="text" fontWeight="medium">
        {info.map(item => item.Balance)[3]}
              </MDTypography>,   
        Time: <MDBox display="flex" py={1}>{info.map(item => item.Time)[3]}</MDBox>,
      },
      {
        Equity: <Company image={iconBulb} name={info.map(item => item.Equity)[4]}/>,
        Balance: <MDTypography variant="caption" color="text" fontWeight="medium">
        {info.map(item => item.Balance)[4]}
              </MDTypography>,   
        Time: <MDBox display="flex" py={1}>{info.map(item => item.Time)[4]}</MDBox>,
      },
      {
        Equity: <Company image={iconBulb} name={info.map(item => item.Equity)[5]}/>,
        Balance: <MDTypography variant="caption" color="text" fontWeight="medium">
        {info.map(item => item.Balance)[5]}
              </MDTypography>,   
        Time: <MDBox display="flex" py={1}>{info.map(item => item.Time)[5]}</MDBox>,
      },
    ]
  };
}
