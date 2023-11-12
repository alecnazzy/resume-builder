function printContent(el) {
  var restorepage = $("body").html();
  var printcontent = $("#" + el).clone();

  $("body").empty().html(printcontent);
  $("textarea").css("border", "none");
  window.print();

  // Restores entered text after printing
  $("body").html(restorepage);
  $("#" + el).html(printcontent);
  $("textarea").css("border", "0.5px solid lightgray");
}
