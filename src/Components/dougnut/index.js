import React, { Component } from "react";
import {Doughnut} from 'react-chartjs-2';

const data = {

	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

class DoughnutChart extends Component {
    state = {
  
    };
  
    
    render() {
    return (
      <div className="donut-chart">
        <h2>Doughnut Example</h2>
        <Doughnut data={data} />
      </div>
   );
}
};




export default DoughnutChart