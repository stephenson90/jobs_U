$(".style").hide();
$(".h2style").hide();
$(".information").hide();

function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 450) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
}

$(window).on("click", function(){
  $(".style").show();
$(".h2style").show();

  myMove();
  $(".welcome").hide();
  countDown();


});

function countDown(){
    var clock=3;
    
    timeval = setInterval(downSouth, 1000);

    function downSouth(){
      clock--;
      
      if(clock===0){
        
      $(".entry").hide();
      $(".information").show(); 
      $(".style h1").lettering("words");   
      
   
    stop();
        
    }

  }

}



  
