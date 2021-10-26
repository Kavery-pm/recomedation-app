import { useEffect } from "react";
import RecomendationItem from "./recomendation-item";
import classes from "./recomendation.module.css";
const DATA = [
    {
      "psychologist": {
        "id": 15,
        "name": "Joann T. Ramirez",
        "expertise": ["Depresión", "Pánico", "Sueño"]
      },
      "recommendedAt": "2021-01-15",
      "source": "DB"
    },
    {
      "psychologist": {
        "id": 17,
        "name": "Edwin D. Heiss",
        "expertise": ["Parejas", "Ansiedad", "Depresión"]
      },
      "recommendedAt": "2021-07-05",
      "source": "IA"
    },
    {
      "psychologist": {
        "id": 55,
        "name": "Todd K. Taylor",
        "expertise": ["Bipolaridad", "Ánimo", "Sueño"]
      },
      "recommendedAt": "2021-11-17",
      "source": "DB"
    },
    {
      "psychologist": {
        "id": 75,
        "name": "Barbara J. Cloutier",
        "expertise": ["Bipolaridad", "Pánico", "Addiciones"]
      },
      "recommendedAt": "2021-07-05",
      "source": "DB"
    }
  ]
const RecomendationList = () => {
  return (
    <div className={classes.list}>
      <RecomendationItem data={DATA}></RecomendationItem>
    </div>
  );
};
export default RecomendationList;

//   useEffect(() => {
//     fetch(
//       "https://cors-anywhere.herokuapp.com/https://gist.github.com/diegoacuna/3a2c8246ec6df3dbc9426b852dd8842b")
//       .then((response) => {
//         return response;
//       })
//       .then((data) => {
//         console.log(data);
//       });
//   }, []);
