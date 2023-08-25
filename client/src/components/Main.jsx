import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";

const Main = () => {
  const [options, setOptions] = useState("State");
  const [sortBy, setSortBy] = useState("Priority");
  return (
    <>
      <Header
        options={options}
        setOptions={setOptions}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <Content
        options={options}
        setOptions={setOptions}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
    </>
  );
};

export default Main;
