//when the user clicks <button>, a RANDOMLY chosen traffic light turns on.
//doTrafficLights generates an 'activeLight' value
//When 'function doTrafficLights' is correctly wired up, the entire program should function. 


function doTrafficLights() {
//when I replace the var keyword with let it threw an error
  const activeLight = getActiveLight();
      if ( activeLight === 'red') {
      turnRed();
      } else if ( activeLight === 'yellow' ) {
          turnYellow();
      } else if ( activeLight === 'green' ) {
    turnGreen();
      } else {
    turnOffLights();
    }
}

/*psuedo code talk through of test function below/

//first instruction is lights off
//disable HTML.class for yellow, red, green on
function turnOffLights() {
  $('.traffic-light').removeClass('yellow-on red-on green-on');
}
//next step is a randomly select a color this is green
function turnGreen() {
//not sure why function turnOffLights has to be called inside color function.
    //is it to turn off the other two classes 'yellow-on' 'red-on' so 'green-on' can run?
  turnOffLights();
//
  $('.green-light').addClass('green-on');
}
//now the program will run next randomly selected color this is green
function turnYellow() {
  turnOffLights();
  $('.yellow-light').addClass('yellow-on');
}

function turnRed() {
  turnOffLights();
  $('.red-light').addClass('red-on');
}

function getActiveLight() {
//this uses Math random and floor methods to ramdomize 
  return (['red', 'green', 'yellow'])[Math.floor(Math.random() * 3)];
}
//this activates doTrafficLights and the HTML on-click button
function handleClicks() {
  $('.js-control-lights').click(function() {
    doTrafficLights();
  });
}

$(handleClicks);
