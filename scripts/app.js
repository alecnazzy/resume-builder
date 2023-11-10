function printContent(el) {
  var restorepage = $("body").html();
  var printcontent = $("#" + el).clone();
  var enteredtext = $("#text").val();
  var enteredName = $("#name").val();
  var enteredAddress = $("#address").val();
  var enteredPhone = $("#phone").val();
  var enteredEmail = $("#email").val();
  var enteredAbout = $("#about").val();
  var enteredJobTitle = $("#job-title").val();
  var enteredJobDate = $("#job-date").val();
  var enteredJobDesc = $("#job-desc").val();
  var enteredEduTitle = $("#edu-title").val();
  var enteredEduDate = $("#edu-date").val();
  var enteredEduDesc = $("#edu-desc").val();
  var enteredSkill1 = $("#skill1").val();
  var enteredSkill2 = $("#skill2").val();
  var enteredSkill3 = $("#skill3").val();

  $("body").empty().html(printcontent);
  window.print();

  // Restores entered text after printing
  $("body").html(restorepage);
  $("#text").html(enteredtext);
  $("#name").html(enteredName);
  $("#address").html(enteredAddress);
  $("#phone").html(enteredPhone);
  $("#email").html(enteredEmail);
  $("#about").html(enteredAbout);
  $("#job-title").html(enteredJobTitle);
  $("#job-date").html(enteredJobDate);
  $("#job-desc").html(enteredJobDesc);
  $("#edu-title").html(enteredEduTitle);
  $("#edu-date").html(enteredEduDate);
  $("#edu-desc").html(enteredEduDesc);
  $("#skill1").html(enteredSkill1);
  $("#skill2").html(enteredSkill2);
  $("#skill3").html(enteredSkill3);
}

// removes border around textarea box when printing
function removeBorder() {
  $("textarea").css("border", "none");
}
