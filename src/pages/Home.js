import React from "react";
import Navbar from "../components/Navbar";
import PersonnelList from "../components/PersonnelList";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "12vh" }} className="w-full flex relative">
        <Sidebar activeClass="personel_list" />
        <PersonnelList />
      </div>
    </div>
  );
};

export default Home;
