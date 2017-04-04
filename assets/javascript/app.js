$(document).ready(function(){

$(".style").css({"position":"relative", "left":"-450px"});
$(".h2style").hide();
$(".information").hide();
$(".job").hide();
$(".college").hide();
startClock();

function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var posl = -100;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 300) {
      clearInterval(id);
    } else {
      pos++; 
      posl++;
      elem.style.top = pos + 'px'; 
      elem.style.left = posl + 'px'; 
    }
  }
}

function slide() {
  var elem = document.getElementById("style");   
  var pos = -450;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos++; 
      //elem.style.top = 0; 
      elem.style.left = pos + 'px'; 
    }
  }
}

function slide2() {
  var elem = document.getElementById("but");   
  var pos = 0;
  var id = setInterval(frame, 3);
  function frame() {
    if (pos == 750) {
      clearInterval(id);
    } else {
      pos++; 
      //elem.style.top = 0; 
      elem.style.left = pos + 'px'; 
    }
  }
}

function startClock(){
    var clock=2;
    
    timeval = setInterval(downSouth, 1000);

    function downSouth(){
      clock--;
      
      if(clock===0){
        
        $(".h2style").show();
  slide();
  myMove();
  slide2();
  
  
  countDown();
             
    }

  }

}


// $(window).on("click", function(){
//   //$(".style").show();
//   $(".h2style").show();
//   slide();
//   myMove();
//   slide2();
  
  
//   countDown();


// });

function countDown(){
    var clock=3;
    
    timeval = setInterval(downSouth, 1000);

    function downSouth(){
      clock--;
      
      if(clock===0){
        
      $(".banner").css({"height":"225px", "width":"138px"});
      $(".banner2").css({"height":"225px", "width":"138px"});
      $(".information").show();
      $(".welcome").hide(); 
      //$(".style").lettering();    
 
        
    }

  }

}

$("#submit").on("click", function(event){
  event.preventDefault();
  $(".entry").hide();
  $(".information").hide();
  $(".job").show();
  $(".college").show();
  
  $(".search").append($("#luniversity"));
  $(".search").append($("#university"));
  $(".search").append($("#lmajor"));
  $(".search").append($("#major"));
  $(".search").append($("#lstate"));
  $(".search").append($("#state"));
  $(".search").append($("#submit"));

  $("#luniversity").css({"position":"relative","left":"0px", "font-size":"20px"});
  $("#university").css({"position":"relative", "left":"0", "top":"0"});
  $("#lmajor").css({"position":"relative","top":"0px", "left":"0px","font-size":"20px"});
  $("#major").css({"position":"relative","top":"0px", "left":"0px","font-size":"20px"});
  $("#lstate").css({"position":"relative","top":"0px", "left":"0px","font-size":"20px"});
  $("#state").css({"position":"relative","top":"0px", "left":"0px","font-size":"20px"});
  $("#submit").css({"position":"relative","top":"0px", "left":"0px","font-size":"20px"});


});

});







  
