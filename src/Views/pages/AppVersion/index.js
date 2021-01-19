import React from 'react'
import DashboardTemplate from "../../template/dashboardtemplate";


import "./style.css"

export default function AppVersion() {
    return (
      <DashboardTemplate>
        <div className="transact-wrapper">
          <div className="header-title">
            <h3>App Version</h3>
          </div>
          <div className="agent-transact-header">
            <div>Add App Version</div>
          </div>
          <div className="app-version">
            <div>ADD APP VERSION</div>
            <form>
              <div className="inputs">
                <div>
                  <input type="checkbox" />
                  <label htmlFor="tick">1.14</label>
                </div>
                <div>
                  <p>App Version</p>
                  <input className="input-text" type="text" />
                </div>
              </div>

              <div className="butons">
                <input type="submit" value="Add"/>
                <input type="submit" value="Delete"/>
              </div>
            </form>
          </div>
        </div>
      </DashboardTemplate>
    );
}
