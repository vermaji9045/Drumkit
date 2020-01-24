var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makesound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}
document.addEventListener("keypress", function(event) {

  makesound(event.key);

  buttonAnimation(event.key);

});
function makesound(key)
{
	switch(key)
	{
	case "a":
	var tom1 = new Audio('so/tom-1.mp3');
      tom1.play();
	  break;
	  case "s":
	  var tom2 = new Audio('so/tom-2.mp3');
      tom2.play();
	  break;
	  case "d":
	  var tom3 = new Audio('so/tom-3.mp3');
      tom3.play();
	  break;
	  case "f":
	  var tom4 = new Audio('so/tom-4.mp3');
      tom4.play();
	  break;
	  case "j":
	  var to = new Audio('so/snare.mp3');
      to.play();
	  break;
	  case "k":
	  var tom = new Audio('so/kick-bass.mp3');
      tom.play();
	  break;
	  case "l":
	  var tom21 = new Audio('so/crash.mp3');
      tom21.play();
	  break;
	  default:
	  console.log(key);
}
}
function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
