import React, { useState } from "react";
import Card from "../ui/Card";
import classes from "./recomendationItem.module.css";
const RecomendationItem = (props) => {
  const [showExpertise, setshowExpertise] = useState(false);
  const toggleExpertisHandler = () => {
    setshowExpertise((prevState) => {
      return !prevState;
    });
  };
  const meetups = [];

  for (const key in props.data) {
    const meetup = {
      id: key,
      ...props.data[key],
    };
    meetups.push(meetup);
  }
  const x = meetups.filter((a) => {
    return a.source === "IA";
  });
  const y = meetups.filter((a) => {
    return a.source === "DB";
  });
  const z = meetups.filter((a) => {
    return a.source === "UA";
  });
  const content = [...x, ...y, ...z];

  return (
    <React.Fragment>
      {content.map((recomendation) => (
        <li className={classes.item} key={recomendation.id}>
          <Card>
            <div className={classes.content}>
              <h3>
                <span>Doctor's Name:</span>
                {recomendation.psychologist.name}
              </h3>
            </div>

            {showExpertise && (
              <div className={classes.content}>
                <h3>
                  <span>Expertise:</span>
                  {`${recomendation.psychologist.expertise}`}
                </h3>
              </div>
            )}

            <div className={classes.actions}>
              <button onClick={toggleExpertisHandler}>
                {showExpertise ? "HideExpertise" : "Show Expertise"}
              </button>
            </div>
          </Card>
        </li>
      ))}
    </React.Fragment>
  );
};
export default RecomendationItem;
