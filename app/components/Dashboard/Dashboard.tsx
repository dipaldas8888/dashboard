import React from "react";
import {TopBar} from "./TopBar"
import {Grid} from "./Grid"

const Dashboard = () => {
  return (
    <section className="bg-white rounded-lg pb-4 shadow">
      <TopBar/>
      <Grid/>
      
    </section>
  );
};

export default Dashboard;
