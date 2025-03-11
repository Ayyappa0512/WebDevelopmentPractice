// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";
import "../public/styles.css"
import animals from "./data";

// const tesla = cars[1];
// const honda = cars[0];
const [tesla, honda] = cars;
console.log(tesla);

const {model:testlaName, coloursByPopularity:[teslaTopColour], speedStats:{topSpeed: teslaTopSpeed} } = tesla;
const {model:hondaName,coloursByPopularity:[hondaTopColour], speedStats:{topSpeed: hondaTopSpeed} } = honda
console.log(teslaTopSpeed);
const [cat, dog] = animals;
const {name, sound} = cat;
console.log(name, ": ",sound);

const obj = {
    self: ["123"],
    __proto__: {
      prot: "456",
      prot2: "458",
    },
    __proto2: {
        pro5: "456",
        prot6: "458",
      }
  };
  const { self, prot:a } = obj;
  console.log("a", a);
  
ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Color</th>
    </tr>
    <tr>
      <td>{testlaName}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{hondaName}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
