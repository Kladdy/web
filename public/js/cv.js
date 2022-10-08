var get_is_runnon_on_localhost = function () {
  var is_runnon_on_localhost = false;
  if (window.location.hostname === "localhost") {
    is_runnon_on_localhost = true;
  }
  return is_runnon_on_localhost;
}


var get_total_cv_downloads = function () {
  let total_cv_downloads = 0
  $.getJSON("https://api.countapi.xyz/get/sigfrid.me/cv-downloads-sv", function(responseSV) {
    total_cv_downloads += responseSV.value 
    $.getJSON("https://api.countapi.xyz/get/sigfrid.me/cv-downloads-en", function(responseEN) {
      total_cv_downloads += responseEN.value 
      $("#cv-downloads").text(total_cv_downloads);
    });      
  });
}

$(document).ready(function () {

  is_runnon_on_localhost = get_is_runnon_on_localhost();
  if (!is_runnon_on_localhost) {
    $.getJSON("https://api.countapi.xyz/hit/sigfrid.me/page-visits", function(response) {
      $("#page-visits").text(response.value);
    });
  } else {
    $.getJSON("https://api.countapi.xyz/get/sigfrid.me/page-visits", function(response) {
      $("#page-visits").text(response.value);
    });
  }

  get_total_cv_downloads()
});

var cv_downloaded = function (language) {
  is_runnon_on_localhost = get_is_runnon_on_localhost();
  if (!is_runnon_on_localhost) {
    $.getJSON(`https://api.countapi.xyz/hit/sigfrid.me/cv-downloads-${language}`, function(response) {
      get_total_cv_downloads();
    });
  }
}