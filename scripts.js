// Load lax.js

window.onload = function () {
  lax.init();

  // Add a driver that we use to control our animations
  lax.addDriver("scrollY", function () {
    return window.scrollY;
  });

  // Add animation bindings to elements
  lax.addElements(".hobbies-list", {
    scrollY: {
      translateX: [
        ["elInY", "elCenterY", "elOutY"],
        [0, "screenWidth/2", "-screenWidth"],
      ],
    },
  });
};

// Player
const box = document.querySelector(".box");
box.addEventListener("click", (e) => {
  e.target.classList.toggle("pause");
});

let audio = document.getElementById("myAudio");

function playAudio() {
  return audio.paused ? audio.play() : audio.pause();
}


// Validate contact me form

function validateForm() {
  let inputError = document.getElementById("inputError");
  let x = document.forms["contactMeForm"]["name"].value;
  let y = document.forms["contactMeForm"]["subject"].value;
  if (x == "" || y == "") {
    inputError.style.display = "block";
    $("html,body").animate(
      {
        scrollTop: $(".input-error").offset().top,
      },
      "slow"
    );
    return false;
  } else {
    inputError.style.display = "none";
    return true;
  }
}

// Hamburger Menu
$(document).ready(function(){
	$('#hamburger').click(function(){
		$(this).toggleClass('open');
    $('#hamburger-open').toggle("slow");
	});
});