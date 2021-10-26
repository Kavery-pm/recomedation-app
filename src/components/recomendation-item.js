import React from "react";
import Card from "../ui/Card";
import classes from "./recomendationItem.module.css";
const RecomendationItem = (props) => {
  const meetups = [];
  
  for (const key in props.data) {
    const meetup = {
      id: key,
      //   source: key.source,
      //   psychologist: key.psychologist,
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

return(
    <React.Fragment>
         {content.map((recomendation) => (
        <li className={classes.item}>
            <Card>
          <div className={classes.content}>
            <h3>{recomendation.psychologist.name}</h3>
          </div>
          <div className={classes.content}>
             <h2>Expertise</h2> 
            <h3>{recomendation.psychologist.expertise}</h3>
          </div>
          </Card>
      </li>))}
      </React.Fragment>
      ) 
    

 
};
export default RecomendationItem;
