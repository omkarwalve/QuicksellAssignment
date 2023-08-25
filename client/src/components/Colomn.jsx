import React from "react";
import Card from "./Card";
const Colomn = (props) => {
  return (
    <>
      {props.Headings?.map((heading) => (
        <div className="col-lg-2 custom-head ">
          <h6>{heading}</h6>
          <>
            <div className="custom-col">
              {props.tickets?.map((ticket) =>
                ticket[props.options] === heading ? (
                  <Card
                    id={ticket.id}
                    title={ticket.title}
                    userid={ticket.userId}
                    status={ticket.status}
                    priority={ticket.priority}
                    tag={ticket.tag}
                  />
                ) : (
                  <></>
                )
              )}
            </div>
          </>
        </div>
      ))}
    </>
  );
};

export default Colomn;
