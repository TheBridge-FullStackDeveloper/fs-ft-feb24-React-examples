import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import TravelList from "./TravelList";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Staff from "./Staff";
import SummerCourse from "./SummerCourse";
import Topic from "./Topic";
import Donations from "./Donations";

function MainComponent() {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/travel" element={<TravelList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/summercourse" element={<SummerCourse />} />
        <Route path="/topic" element={<Topic />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </main>
  );
}

export default MainComponent;
