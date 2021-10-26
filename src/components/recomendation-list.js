import { useEffect } from "react";
import RecomendationItem from "./recomendation-item";
import classes from "./recomendation.module.css";
const DATA = [
  {
    psychologist: {
      id: 15,
      name: "Joann T. Ramirez",
      expertise: ["Depresión", "Pánico", "Sueño"],
    },
    recommendedAt: "2021-01-15",
    source: "IA",
  },
  {
    psychologist: {
      id: 17,
      name: "Edwin D. Heiss",
      expertise: ["Parejas", "Ansiedad", "Depresión"],
    },
    recommendedAt: "2021-07-05",
    source: "DB",
  },
  {
    psychologist: {
      id: 25,
      name: "Salvador C. Milton",
      expertise: ["TOC", "Addiciones", "Bipolaridad"],
    },
    recommendedAt: "2021-12-08",
    source: "UA",
  },
  {
    psychologist: {
      id: 31,
      name: "Tonya E. Mikesell",
      expertise: ["Depresión", "Duelo", "Estrés"],
    },
    recommendedAt: "2021-06-17",
    source: "IA",
  },
  {
    psychologist: {
      id: 55,
      name: "Todd K. Taylor",
      expertise: ["Bipolaridad", "Ánimo", "Sueño"],
    },
    recommendedAt: "2021-11-17",
    source: "DB",
  },
  {
    psychologist: {
      id: 70,
      name: "Kaye D. Ruiz",
      expertise: ["Sueño", "TOC", "Alimentación"],
    },
    recommendedAt: "2021-04-07",
    source: "UA",
  },
  {
    psychologist: {
      id: 71,
      name: "Ronnie K. Manning",
      expertise: ["Alimentación", "Ánimo", "Ansiedad"],
    },
    recommendedAt: "2021-12-28",
    source: "IA",
  },
  {
    psychologist: {
      id: 75,
      name: "Barbara J. Cloutier",
      expertise: ["Bipolaridad", "Pánico", "Addiciones"],
    },
    recommendedAt: "2021-07-05",
    source: "DB",
  },
  {
    psychologist: {
      id: 81,
      name: "Eric J. Hanks",
      expertise: ["Alimentación", "Infantil", "Depresión"],
    },
    recommendedAt: "2020-11-25",
    source: "UA",
  },
  {
    psychologist: {
      id: 85,
      name: "Rosemary T. Keller",
      expertise: ["Addiciones", "Bipolaridad", "Alimentación"],
    },
    recommendedAt: "2021-02-04",
    source: "IA",
  },
];
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
