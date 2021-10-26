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

  return (
    <React.Fragment>
      <Card>
        <div className={classes.actions}>
          <button onClick={toggleExpertisHandler}>
            {showExpertise ? "HideExpertise" : "Show Expertise"}
          </button>
        </div>
      </Card>
      {props.data.map((recomendation) => (
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
          </Card>
        </li>
      ))}
    </React.Fragment>
  );
};
export default RecomendationItem;
