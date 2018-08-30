document.querySelector(".button-finish").addEventListener("click", function () {

  // Call the server to get the message
  $ajaxUtils.sendGetRequest("/data/finish-welcome.json", function (res) {
    var message = res.string;
    document.querySelector("#content").innerHTML = message;
  });
});