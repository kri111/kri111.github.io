$(document).ready(function(){ //do this when document is loaded
  $("#content_dialer").show() //show element with ID "element"
  $("#content_list").hide() //hide element with ID "otherElement"
  $("#content_form").hide()
  $("#test_gestures").hide()
});

$("#button_dialer").click(function(){ //when "button_id" is clicked
  $("#content_dialer").show() //show element
  $("#content_list").hide() //hide other element
  $("#content_form").hide()
  $("#test_gestures").hide()
});

$("#button_list").click(function(){ //when "button_id" is clicked
  $("#content_list").show() //show element
  $("#content_dialer").hide() //hide other element
  $("#content_form").hide()
  $("#test_gestures").hide()
});

$("#button_add").click(function(){ //when "button_id" is clicked
  $("#content_form").show() //show element
  $("#content_dialer").hide() //hide other element
  $("#content_list").hide()
  $("#test_gestures").hide()
});

$("#button_gestures").click(function(){
  $("#content_form").hide()
  $("#content_dialer").hide()
  $("#content_list").hide()
  $("#test_gestures").show()
});

$("#button_1").click(function(){
  $("#dialer_entry").val($("#dialer_entry").val() + "1")
});

$("#button_2").click(function(){
  $("#dialer_entry").val($("#dialer_entry").val() + "2")
});

$("#button_3").click(function(){
  $("#dialer_entry").val($("#dialer_entry").val() + "3")
});

$("#button_4").click(function(){
  $("#dialer_entry").val($("#dialer_entry").val() + "4")
});

$("#button_5").click(function(){
  $("#dialer_entry").val($("#dialer_entry").val() + "5")
});

$("#button_6").click(function(){
  $("#dialer_entry").val($("#dialer_entry").val() + "6")
});

$("#button_7").click(function(){
  $("#dialer_entry").val($("#dialer_entry").val() + "7")
});

$("#button_8").click(function(){
  $("#dialer_entry").val($("#dialer_entry").val() + "8")
});

$("#button_9").click(function(){
  $("#dialer_entry").val($("#dialer_entry").val() + "9")
});

$("#button_0").click(function(){
  $("#dialer_entry").val($("#dialer_entry").val() + "0")
});

$("#button_star").click(function(){
  $("#dialer_entry").val($("#dialer_entry").val() + "*")
});

$("#button_pound").click(function(){
  $("#dialer_entry").val($("#dialer_entry").val() + "#")
});

$("#button_clear").click(function(){
  $("#dialer_entry").val("")
});

/* detecting mouse up or down in gesture_area */

/*
startingXpoint = 0
startingYpoint = 0
endingXpoint = 0
endingYpoint = 0

$("#gesture_area").mousedown(function(event){
  startingXpoint = event.pageX
  startingYpoint = event.pageY
  $("#gesture_output").text("mouse down")
});

$("#gesture_area").mouseup(function(event){
  endingXpoint = event.pageX
  endingYpoint = event.pageY

  if (endingXpoint > startingXpoint){
    $("#gesture_output").text("swipe right")
  }else if (endingXpoint < startingXpoint){
    $("#gesture_output").text("swipe left")
  }else if (endingYpoint > startingYpoint){
    $("#gesture_output").text("swipe down")
  }else if (endingYpoint < startingYpoint){
    $("#gesture_output").text("swipe up")
  }else{
    $("#gesture_output").text("mouse up")
  }

});
*/
