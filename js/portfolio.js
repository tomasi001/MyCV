$(function () {
  //   create variable to store timeOut
  var timeOut;

  // on click function added to introBtn
  // if introPara element is set to display "none"
  // set introPara element to slideDown
  //else set introPara element to slide up
  $("#introBtn").on("click", function () {
    if ($("#introPara p").css("display") == "none") {
      $("#introPara p").slideDown();
    } else {
      $("#introPara p").slideUp();
    }

    // if lettespacing is set to 2px set it to -3px
    if ($("#introPara p").css("letter-spacing") == "2px") {
      $("#introPara p").css("letter-spacing", "-3px");
    } 
    // else clear timeout
    // add the TextAnimLetter class to introPara element
    // call set time out function and remove the class after animation is complete
    // set letter spacing to 2px
    else {
      clearTimeout(timeOut);
      $("#introPara p").addClass("textAnimLetter");
      timeOut = setTimeout(function () {
        $("#introPara p").removeClass("textAnimLetter");
      }, 2000);
      $("#introPara p").css("letter-spacing", "2px");
    }
  });

  // on click function added to projBtn
  // Fade #projects .row element in or out 
  $("#projBtn").on("click", function () {
    $("#projects .row").fadeToggle(1000);
  });

  // on click function added to expBtn
  // if line height = 25px set line height to 2px
  $("#expBtn").on("click", function () {
    if ($("#expPara").css("line-height") == "25px") {
      $("#expPara").css("line-height", "2px");
    } 
    
  // else clear timeout
  // add the TextAnimLine class to expPara element
  // call set time out function and remove the class after animation is complete
  // set line height to 25px
    else {
      clearTimeout(timeOut);
      $("#expPara").addClass("textAnimLine");
      timeOut = setTimeout(function () {
        $("#expPara").removeClass("textAnimLine");
      }, 1000);
      $("#expPara").css("line-height", "25px");
    }
  });

  // on click function added to conBtn
  // if #contact .row element display set to flex
  // fadeout #contact .row  element
  $("#conBtn").on("click", function () {
    if($("#contact .row").css("display") == "flex"){
        $("#contact .row").fadeOut();
    }

    // else fade in #contact .row  element 
    // and set display to flex
    else{
        $("#contact .row").fadeIn(1500).css("display", "flex");
    }
  });
});
