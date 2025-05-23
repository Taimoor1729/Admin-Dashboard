import React from "react";
import './home.scss';
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import ListTable from "../../components/table/Table";


function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2/1} title="User Spending (Last 6 Months)"/>
        </div>
        <div className="listContainer">
          <div className="listTitle"> latet Transaction</div>
          <ListTable />
        </div>
      </div>
    </div>
  );
}

export default Home;