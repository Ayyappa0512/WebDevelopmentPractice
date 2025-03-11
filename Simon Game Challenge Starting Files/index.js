alert("inside Js")

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

  $('.btn').click(function (){
    var userChosenColour = $(this).attr("id");
    playSound(userChosenColour);
  })

  function nextSequence(){
    return Math.round(Math.random()*3);
  }
  var gameColors = ['green', 'red', 'yellow', 'blue'];

  $(document).keydown(function (event){
    console.log(event);
    console.log(event.key)
    console.log(gameColors[0], gameColors[1], gameColors[2], gameColors[3])
    var randomChooseColor = gameColors[nextSequence()];
    console.log(nextSequence());
    console.log(randomChooseColor)
    if(event.key === 'A' || event.key === 'a'){
        playSound(randomChooseColor);
        $('#'+randomChooseColor).
    }
  })

 
  
  