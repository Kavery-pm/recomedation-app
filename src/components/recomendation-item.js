import Card from "../ui/Card";
import classes from "./recomendationItem.module.css";
const RecomendationItem = (props) => {
  return (
    <li className={classes.item}>
        <Card>
      <div className={classes.content}>
        <h3>NAME</h3>
      </div>
      <div className={classes.content}>
        <h3>EXPERTISE</h3>
      </div>
      </Card>
    </li>
  );
};
export default RecomendationItem;
