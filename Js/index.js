$(document).ready(function(){
    $("div").mouseup(function(){
      $(this).after("<p style='color:green;'>Mouse button released.</p>");
    });
    $("div").mousedown(function(){
      $(this).after("<p style='color:purple;'>Mouse button pressed down.</p>");
    });
    
  });

// var date =new Date();
// var currentDate=date.getFullYear();
// var Date=date.getDay();
// document.write(currentDate);
// document.write(date);