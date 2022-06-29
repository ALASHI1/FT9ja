import { useState,useEffect } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import axios from "axios";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import ReportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";

function Dashboard() {
  const { sales, tasks } = ReportsLineChartData();
  const [balance, setBalance] = useState(0.0);
  const [equity, setEquity] = useState(0.0);

  useEffect(() => {
    getEquAndBal();
    let interval = setInterval(() => {
      getEquAndBal();
    }, 294000);
    return () => clearInterval(interval);
  }, []);


    let getEquAndBal = () => {
      axios.get(
        "api/getinfo"
      )
      .then(res => {
        setBalance(res.data[1].Balance);
        setEquity(res.data[1].Equity);
      }
      )
      .catch(err => {
        console.log(err);
      }
      );
    }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Balance"
                count={balance}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Equity"
                count={equity}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={16} md={6} lg={6}>
              <MDBox mb={7}>
                <ReportsLineChart
                  color="success"
                  title="Equity/Time"
                  date="updated 5 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <MDBox mb={7}>
                <ReportsLineChart
                  color="dark"
                  title="Balance/Time"
                  date="updated 5 min ago"
                  chart={tasks}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects  />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
