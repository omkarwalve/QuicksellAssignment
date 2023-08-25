import React, { useEffect, useState } from "react";
import Colomn from "./Colomn";

const DisplayState = (props) => {
  const [Headings, setHeadings] = useState();
  const [showOptions, setshowOptions] = useState();

  useEffect(() => {
    if (props.options === "State") {
      setHeadings(["Backlog", "Todo", "In progress", "Done", "Canceled"]);
      setshowOptions("status");
    } else if (props.options === "User") {
      setHeadings([
        "Anoop sharma",
        "Yogesh",
        "Shankar Kumar",
        "Ramesh",
        "Suresh",
      ]);
      setshowOptions("userId");
    } else {
      setHeadings(["No priority", "Urgent", "High", "Medium", "Low"]);
      setshowOptions("priority");
    }
  }, [props.options]);

  return (
    <>
      <Colomn
        Headings={Headings}
        tickets={props.tickets}
        options={showOptions}
        users={props.users}
      />
    </>
  );
};

export default DisplayState;
