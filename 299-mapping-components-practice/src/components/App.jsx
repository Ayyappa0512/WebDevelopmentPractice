import React from "react";
import CreateEntry from "./CreateEntry"
import Entry from "./Entry";
import emojipedia from "../emojipedia"



function App() {

  let numbers = [1, 3, 5, 6, 8];

  console.log("numbers: ", numbers);

  var newNumbers = numbers.map(function (x){
    return x*2;
  });

  console.log("New numbers: ", newNumbers);

  var filterNumber = numbers.filter(function (x){
     return x>5;
  });
  console.log("Filter numbers: "+ filterNumber);

  var findNumber = numbers.find((x) => {return x > 5;});
  console.log("find number: ", findNumber);


  var findNumberIndex = numbers.findIndex((x) => {return x > 5;});
  console.log("find index: ", findNumberIndex);

  var reduceNumber = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  console.log("reduce numbers: ", reduceNumber);

    var reduceNumber1 = numbers.reduce((intialvalue, currentValue) => intialvalue+currentValue)
  console.log("reduce numbers1: ", reduceNumber1);

  // sub string
  var str = "Ra ndom  n ub mer ";
  console.log("subString: ",str.substring(3,8));

   // split string => return array of string
   console.log("split:",str.split("n",3).map((str) => str.trim()));

   console.log(emojipedia.map((emojipedia) => (emojipedia.meaning.substring(0,100))));

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      
      <dl className="dictionary">
      {emojipedia.map(emojiTrem => (<Entry
            key={emojiTrem.id}
            name={emojiTrem.name}
            symbol={emojiTrem.emoji}
            description={emojiTrem.meaning} />))}
      </dl>
    </div>
  );
}

export default App;
