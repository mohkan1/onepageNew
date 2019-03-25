$(document).ready(function(){ //read the code efter loading up the html file
  //Hiding the elements
  $('img').hide();
  $('main').hide();
  $('aside').hide();
  $('article').hide();

//Showing html elements when the user is scrolling down
  function myFunction() {
    //if the user scolled more than 350 show the html elements myImg and myImg2
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      document.getElementById("myImg").className = "slideUp";
      document.getElementById("myImg2").className = "slideUp2";
      document.getElementById("myImg").setAttribute("style", "display:visible");
      document.getElementById("myImg2").setAttribute("style", "display:visible");
    }

    //if the user scolled more than 350 show the html elements myImg3
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
      document.getElementById("myImg3").className = "slideUp3";
      document.getElementById("myImg3").setAttribute("style", "display:visible");
    }

    //if the user scolled more than 350 show the html elements myImg4
    if (document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700) {
      document.getElementById("myImg4").className = "slideUp3";
      document.getElementById("myImg4").setAttribute("style", "display:visible");
    }
  }
  //Call the myFunction function when the user scolls up or down
  window.onscroll = function() {
    myFunction();
  };

  //showing the menu
  $('.dropdown').show();
  //showing the map
  $('.map').show();
  //showing the top button
  $('#top').show();
  //moving smoothly to the targeted html elements withen 2 s
  $("#menu").click(function() {
      $('html,body').animate({
        scrollTop:$(".element1").offset().top}, 2000);
      });
  //moving smoothly to the targeted html elements withen 2 s
  $("#who").click(function() {
    $('html,body').animate({
      scrollTop:$(".element2").offset().top}, 2000);
      });
  //moving smoothly to the targeted html elements withen 2 s
  $("#contact").click(function() {
      $('html,body').animate({
        scrollTop:$(".container").offset().top}, 2000);
      });
  //moving smoothly to the targeted html elements withen 2 s
  $("#top").click(function() {
      $('html,body').animate({
        scrollTop:$("#getup").offset().top}, 2000);
      });
  //moving smoothly to the targeted html elements withen 2 s
  $("#map").click(function() {
      $('html,body').animate({
        scrollTop:$(".map").offset().top}, 2000);
      });
  //moving smoothly to the targeted html elements withen 2 s
  $("#home").click(function() {
      $('html,body').animate({
        scrollTop:$(".parallax").offset().top}, 2000);
      });

  //The function that ckecks if the input is allowed or not
  function testInfo(input,re,textsvar){ //taking tre parameters (the input, regular expression and where to print the answer)
    //Check the value
    var OK = re.exec(input);
    //if the input is not allowed according to the reqular expression show that the input is not allowed
    if (!OK)
      $(textsvar).text("fel");
    //if the input is allowed according to the reqular expression show that the input is allowed
    else
    $(textsvar).text("ok");
    }

  //when the key is up check what he/she wrote is allowed
  $("#number").keyup(function(){

    var re = /^[0]{1}[0-9]{6,15}$/;
    testInfo($('#number').val(),re,".answerN");

  });

  //when the key is up check what he/she wrote is allowed
  $("#fname").keyup(function(){

    var re = /^[A-Za-z]+$/;
    testInfo($('#fname').val(),re,".answerF");

  });

  //when the key is up check what he/she wrote is allowed
  $("#lname").keyup(function(){

    var re = /^[A-Za-z]+$/;
    testInfo($('#lname').val(),re,".answerL");

  });

  //when the key is up check what he/she wrote is allowed
  $("#gmail").keyup(function(){

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    testInfo($('#gmail').val(),re,".answerG");

  });

  //writint the title of the website slowly (a time has been used to do such thing)
    var i = 0;
    var txt = 'Welcome to Hungry';
    var speed = 100;
    //writing slowly. This function writes a letter of the text txt every 100 ms
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);

      }
    }
    typeWriter();

});
