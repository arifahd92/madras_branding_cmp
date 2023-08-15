import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./component/navPages/Home";

const MyComponent = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default MyComponent;
