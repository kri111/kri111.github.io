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

$("#button_1").click(function(){ //when "button_id" is clicked
  $("#dialer_entry").val($("#dialer_entry").val() + "1")
  alert($("#dialer_entry").val());
});
