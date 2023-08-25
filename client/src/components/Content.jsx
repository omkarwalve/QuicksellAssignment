import React, { useEffect, useState } from "react";

import DisplayState from "./DisplayState";
const Content = (props) => {
  const url = "https://api.quicksell.co/v1/internal/frontend-assignment";
  const [data, setdata] = useState();
  const [tickets, setTickets] = useState();
  const [users, setUsers] = useState();

  useEffect(() => {
    getJsonData();
  }, []);

  const getJsonData = () => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        Object.keys(data.tickets).map((key) => {
          if (data.tickets[key].priority === 0) {
            data.tickets[key].priority = "No priority";
          } else if (data.tickets[key].priority === 1) {
            data.tickets[key].priority = "Low";
          } else if (data.tickets[key].priority === 2) {
            data.tickets[key].priority = "Medium";
          } else if (data.tickets[key].priority === 3) {
            data.tickets[key].priority = "High";
          } else {
            data.tickets[key].priority = "Urgent";
          }

          return null;
        });

        Object.keys(data.tickets).map((key) => {
          if (data.tickets[key].userId === "usr-1") {
            data.tickets[key].userId = "Anoop sharma";
          } else if (data.tickets[key].userId === "usr-2") {
            data.tickets[key].userId = "Yogesh";
          } else if (data.tickets[key].userId === "usr-3") {
            data.tickets[key].userId = "Shankar Kumar";
          } else if (data.tickets[key].userId === "usr-4") {
            data.tickets[key].userId = "Ramesh";
          } else {
            data.tickets[key].userId = "Suresh";
          }

          return null;
        });

        setdata(data);
        setTickets(data.tickets);
        setUsers(data.users);
        console.log("Data fetched successfully:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="container-fluid main-content">
        <div className="row custom-row">
          <DisplayState
            options={props.options}
            tickets={tickets}
            users={users}
          />
        </div>
      </div>
    </>
  );
};

export default Content;
