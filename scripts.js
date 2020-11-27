function loadFlags() {
  $("#aboutme").hide();
  $("#content").show();
  $("#content").load("flag.html");
}

function loadPyramid() {
  $("#aboutme").hide();
  $("#content").show();
  $("#content").load("Pyramid.html");
}

function loadFamily() {
  $("#aboutme").hide();
  $("#content").show();
  $("#content").load("family.html");
}

function loadAboutMe() {
  $("#aboutme").show();
  $("#content").hide();
}
