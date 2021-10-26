import { useEffect, useState } from "react";
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
    const [loadedRecomendations, setloadedRecomendations] = useState([]);
    useEffect(() => {
        fetch(
          "https://gist.githubusercontent.com/diegoacuna/0c7d5508a3af22dd1922eb98156bb402/raw/f5e87043c1e676354c9c723b0bfd23d2094a6be1/react_fullstack_recommendations_2.json")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            const recomendations = [];
            for (const key in data) {
              const recomendation = {
                id: key,
                ...data[key],
              };
              recomendations.push(recomendation);
            }
            setloadedRecomendations(recomendations);
          });
      }, []);
  return (
    <div className={classes.list}>
      <RecomendationItem data={loadedRecomendations}></RecomendationItem>
    </div>
  );
};
export default RecomendationList;


