import React, { useState, useEffect } from "react";
import DashboardTemplate from "../../template/dashboardtemplate";
import "./style.css";
import LineChart from "../../../Components/lineChart";
import Barchart from "../../../Components/barchart";
import Doughnut from "../../../Components/dougnut";
import {
  DashboardBreakdown,
  DashboardDetails,
} from "../../../Redux/requests/dashboardRequest";
import { connect } from "react-redux";
import Loader from "../../../Components/secondLoader";

const DashBoard = (props) => {
  const {
    DashboardBreakdown: DashboardBreakdowns,
    DashboardDetails: DashboardDetail,
    dashboardDetails,
    dashboardBreakdown,
    mostPerformingAgent,
    transactionTypeBreakdown,
    loading,
  } = props;
  const {
    successful_value,
    failed_volume,
    successful_volume,
    failed_value,
  } = dashboardBreakdown;
  const { totalTransactionValue, totalTransactionVolume } = dashboardDetails;

  useEffect(() => {
    DashboardBreakdowns();
    DashboardDetail();
  }, []);


  return (
    <DashboardTemplate>
      <div className="dashboard-wrapper">
        {loading && (
          <Loader
            type="TailSpin"
            type="Oval"
            height={60}
            width={60}
            color="#1E4A86"
          />
        )}

        <div className="header-title">
          <h3>Dashboard</h3>
          <p>An overview of all activities on mCashPoint</p>
        </div>

        <div className="graphs-wrapper">
          <div className="Dashboard-overview-wrapper">
            <div className="flex-box ">
              <div className="person-background"></div>
              <div>
                <div>120</div>
                <div>Agents </div>
              </div>
            </div>
            {/* <div className="flex-box">
              <div className="mark-background"></div>
              <div>
                <div>0</div>
                <div>Unique Customers</div>
              </div>
            </div> */}
            <div className="flex-box">
              <div className="underperform-background"> </div>
              <div>
                <div>
                  {totalTransactionVolume ? totalTransactionVolume : "#00"}
                </div>
                <div>Total transaction Volume</div>
              </div>
            </div>
            <div className="flex-box ">
              <div className="book-background"> </div>
              <div>
                <div>
                  {totalTransactionValue ? totalTransactionValue : "#00"}
                </div>
                <div>Total transaction Value</div>
              </div>
            </div>
          </div>

          {/* <div className="transaction-graph-wrapper"> */}
          <div className="line-and-details">
            <div className="chart-bg">
              <LineChart />
            </div>
            <div className="transaction-graph-inner">
              <div className="transaction-details a">
                <p>Successful</p>
                <h6 className="success-text">
                  {successful_value ? successful_value : "#0000"}(
                  {successful_volume ? successful_volume : "0"})
                </h6>
              </div>
              <div className="transaction-details">
                <p>Failed</p>
                <h6 className="failure-text ">
                  {failed_value ? failed_value : "#000"}(
                  {failed_volume ? failed_volume : "0"})
                </h6>
              </div>
              <div className="transaction-details b">
                <p>Agent Registered</p>
                <h6>15</h6>
              </div>
            </div>

            <div className="dougnut-wrapper">
              <div className="dougnut-chart">
                <Doughnut />
              </div>
              <div className="transaction-types">
                {transactionTypeBreakdown.map((typeBreakdown, index) => (
                  <div className="transaction-types-wrapper">
                    <div>
                      <div className="cashout-dot"></div>
                      {typeBreakdown.type}
                    </div>
                    <div>20(78.5%)</div>
                  </div>
                ))}

                {/* <div className="transaction-types-wrapper">
                  <div>
                    <div className="fundtransfer-dot"></div>Funds Transfer
                  </div>
                  <div>20(78.5%)</div>
                </div>
                <div className="transaction-types-wrapper">
                  <div>
                    <div className="creditpurse-dot"></div>Credit Purse
                  </div>
                  <div>20(78.5%)</div>
                </div>
                <div className="transaction-types-wrapper">
                  <div>
                    <div className="gotv-dot"></div>GOtv
                  </div>
                  <div>20(78.5%</div>
                </div>
                <div className="transaction-types-wrapper">
                  <div>
                    <div className="recharge-dot"></div>Recharge Top Up
                  </div>
                  <div>20(78.5%</div>
                </div>
                <div className="transaction-types-wrapper">
                  <div>
                    <div className="startime-dot"></div> Star Times
                  </div>
                  <div>20(78.5%</div>
                </div>
                <div className="transaction-types-wrapper">
                  <div>
                    <div className="Agentransfer-dot"></div>Agent Transfer
                  </div>
                  <div>20(78.5%)</div>
                </div> */}
              </div>
            </div>
          </div>

          <div className="bar-graph-wrapper">
            <div className="barchart-bg">
              <Barchart />
            </div>
            <div className="daily-per-agent">
              <div id="daily-header">Daily Top Performing Agents</div>

              {mostPerformingAgent.slice(0, 5).map((PerformingAgent, index) => (
                <div>
                  <li>{PerformingAgent.businessName}</li>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
    </DashboardTemplate>
  );
};

const mapStateToProps = (state) => (
  console.log(state),
  {
    dashboardBreakdown: state.dashboard.dashboardBreakdown,
    dashboardDetails: state.dashboard.dashboardDetails,
    mostPerformingAgent: state.dashboard.mostPerformingAgent,
    transactionTypeBreakdown: state.dashboard.transactionTypeBreakdown,
    loading: state.dashboard.loading,
    error: state.dashboard.error,
  }
);

export default connect(mapStateToProps, {
  DashboardBreakdown,
  DashboardDetails,
})(DashBoard);
