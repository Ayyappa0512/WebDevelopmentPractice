alert("Inside the Js");

var arry = [15, 25, 36, -5];

// var message = "";
// for(var a of arry) {
//     message = message.concat(`... ${a}°C in ${arry.indexOf(a)+1} day`).concat(" ");
// }

// console.log(`... ${arry[0]}°C in 1 day ... ${arry[1]}°C in 2 day ... ${arry[2]}°C in 3 day`);


var printForcast = (array) => {
    var message = "... ";
    for (var a of arry) {
        message = message.concat(`${a}°C in ${arry.indexOf(a) + 1} day`).concat(" ... ");
    }
    return message;
};
console.log(printForcast(arry));
