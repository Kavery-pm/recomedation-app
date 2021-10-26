import classes from "./recomendationItem.module.css";
const RecomendationItem = (props) => {
  return (
    <li className={classes.item}>
      <div className={classes.content}>
        <h3>NAME</h3>
      </div>
      <div className={classes.content}>
        <h3>EXPERTISE</h3>
      </div>
    </li>
  );
};
export default RecomendationItem;
