$(document).ready(function(){ //do this when document is loaded
  $("#content_dialer").show(); //show element with ID "element"
  $("#content_list").hide(); //hide element with ID "otherElement"
  $("#content_form").hide();
});

$("#button_dialer").click(function(){ //when "button_id" is clicked
  $("#content_dialer").show(); //show element
  $("#content_list").hide(); //hide other element
  $("#content_form").hide();
});

$("#button_list").click(function(){ //when "button_id" is clicked
  $("#content_list").show(); //show element
  $("#content_dialer").hide(); //hide other element
  $("#content_form").hide();
});

$("#button_add").click(function(){ //when "button_id" is clicked
  $("#content_form").show(); //show element
  $("#content_dialer").hide(); //hide other element
  $("#content_list").hide();
});

$("#button_1").click(function(){
  $("#dialer_entry").val($("#dialer_entry").val() + "1");
});

$("#button_2").click(function(){
  $("#dialer_entry").val($("#dialer_entry").val() + "2");
});

$("#button_3").click(function(){
  $("#dialer_entry").val($("#dialer_entry").val() + "3");
});

$("#button_4").click(function(){
  $("#dialer_entry").val($("#dialer_entry").val() + "4");
});

$("#button_5").click(function(){
  $("#dialer_entry").val($("#dialer_entry").val() + "5");
});

$("#button_6").click(function(){
  $("#dialer_entry").val($("#dialer_entry").val() + "6");
});

$("#button_7").click(function(){
  $("#dialer_entry").val($("#dialer_entry").val() + "7");
});

$("#button_8").click(function(){
  $("#dialer_entry").val($("#dialer_entry").val() + "8");
});

$("#button_9").click(function(){
  $("#dialer_entry").val($("#dialer_entry").val() + "9");
});

$("#button_0").click(function(){
  $("#dialer_entry").val($("#dialer_entry").val() + "0");
});

$("#button_star").click(function(){
  $("#dialer_entry").val($("#dialer_entry").val() + "*");
});

$("#button_pound").click(function(){
  $("#dialer_entry").val($("#dialer_entry").val() + "#");
});

$("#button_clear").click(function(){
  $("#dialer_entry").val("");
});
