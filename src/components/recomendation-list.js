import { useEffect, useState } from "react";
import RecomendationItem from "./recomendation-item";
import classes from "./recomendation.module.css";

const RecomendationList = () => {
  const [loadedRecomendations, setloadedRecomendations] = useState([]);
  const [Loading, setLoading] = useState(null);
  const [Error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(
      "https://gist.githubusercontent.com/diegoacuna/0c7d5508a3af22dd1922eb98156bb402/raw/f5e87043c1e676354c9c723b0bfd23d2094a6be1/react_fullstack_recommendations_2.json"
    )
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
        const x = recomendations.filter((a) => {
          return a.source === "IA";
        });
        const y = recomendations.filter((a) => {
          return a.source === "DB";
        });
        const z = recomendations.filter((a) => {
          return a.source === "UA";
        });
        const filteredRecomendation = [...x, ...y, ...z];
        setLoading(false);
        setloadedRecomendations(filteredRecomendation);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  if (Loading && Error) {
    return <p>{Error}</p>;
  }
  if (Loading && !Error) {
    return <p>Loading</p>;
  }

  return (
    <div className={classes.list}>
      <RecomendationItem data={loadedRecomendations}></RecomendationItem>
    </div>
  );
};
export default RecomendationList;
