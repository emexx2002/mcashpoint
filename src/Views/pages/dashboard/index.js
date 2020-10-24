import React, { Component } from "react";
import DashboardTemplate from "../../template/dashboardtemplate";
import UnderPerform from '../../../Assets/img/underperform.png'
import Mark from '../../../Assets/img/mark.png'
import Person from '../../../Assets/img/person.png'
import Book from '../../../Assets/img/book.png'
import './style.css';
import { Container, Row, Col } from "react-bootstrap";
import LineChart from '../../../Components/lineChart'
import Barchart from '../../../Components/barchart'
import Doughnut from '../../../Components/dougnut'


class Home extends Component {
  state = {

  };

  
  render() {
 
    return (
      <DashboardTemplate >
        <div className='dashboard-wrapper'>
           <div className='header-title'>
                <h3>Dashboard</h3>
                <p>An overview of all activities on mCashPoint</p>
           </div>
            <div className='Dashboard-overview-wrapper'>
                <div className='flex-box'>
                    <div className="person-background"></div>
                    <div>
                        <div>120</div>
                        <div>Agents </div>
                    </div>
                </div>
                <div className='flex-box'>
                    <div className="mark-background"></div>
                    <div>
                        <div>0</div>
                        <div>Unique Customers</div>
                    </div>
                </div>
                <div className='flex-box'>
                    <div className="underperform-background"> </div>
                    <div>
                        <div>23,332</div>
                        <div>Total transaction Volume</div>
                    </div>
                </div>
                <div className='flex-box'>
                    <div className="book-background"> </div>
                    <div>
                        <div>₦177,066,894.04</div>
                        <div>Total transaction Value</div>
                    </div>
                </div>
            </div>
            
           <div className='graphs-wrapper'>
                <div>
                    <div className='transaction-graph-wrapper'>
                        <div className='chart-bg'><LineChart /></div>
                        <div className='transaction-graph-inner'>
                            <div className='transaction-details'>
                                <div >successful</div>
                                <div className='success-text'>#1,942,073.01(134)</div>
                            </div>
                            <div className='transaction-details'>
                                <div >failed</div>
                                <div className='failure-text'>#420,073.01(24)</div>
                            </div>
                            <div className='transaction-details'> 
                                <div>Agent Registered</div>
                                <h6>15</h6>
                            </div>
                        </div>
                    </div>
                    <div className='bar-graph-wrapper'>
                        <div className='barchart-bg'>< Barchart /></div>
                        <div className='daily-per-agent'>
                            <div id='daily-header'>Daily Top Performing Agents</div>
                            <div>
                                <ol>
                                    <li>Fast Track Investment</li>
                                    <li>Fast Track Investment</li>
                                    <li>Fast Track Investment</li>
                                    <li>Fast Track Investment</li>
                                    <li>Fast Track Investment</li>
                                    
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
              
               <div className='dougnut-wrapper'>
               <div className='dougnut-chart'>< Doughnut /></div>
                    <div className='transaction-types'>
                        <div className='transaction-types-wrapper'>
                            <div >
                                <p>  <div className='cashout-dot'></div>Cash Out</p>
                            </div>
                            <div>20(78.5%)</div>
                        </div>
                        <div className='transaction-types-wrapper'>
                            <div >
                                <p>  <div className='fundtransfer-dot'></div>Funds Transfer</p>
                            </div>
                            <div>20(78.5%)</div>
                        </div>
                        <div className='transaction-types-wrapper'>
                            <div >
                                <p>  <div className='creditpurse-dot'></div>Credit Purse</p>
                            </div>
                            <div>20(78.5%)</div>
                        </div><div className='transaction-types-wrapper'>
                            <div >
                                <p>  <div className='gotv-dot'></div>GOtv</p>
                            </div>
                            <div>20(78.5%</div>
                        </div><div className='transaction-types-wrapper'>
                            <div >
                                <p>  <div className='recharge-dot'></div>Recharge Top Up</p>
                            </div>
                            <div>20(78.5%</div>
                        </div><div className='transaction-types-wrapper'>
                            <div >
                                <p>  <div className='startime-dot'></div> Star Times</p>
                            </div>
                            <div>20(78.5%</div>
                        </div><div className='transaction-types-wrapper'>
                            <div >
                                <p>  <div className='Agentransfer-dot'></div>Agent Transfer</p>
                            </div>
                            <div>20(78.5%)</div>
                        </div>

                    </div>
               </div>

           </div>
           
        </div>
      </DashboardTemplate>
    );
  }

  };



export default Home
