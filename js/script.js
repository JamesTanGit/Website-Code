document.querySelector(".button-finish").addEventListener("click", function () {

  // Call the server to get the message
  // $ajaxUtils.sendGetRequest("/data/finish-welcome.json", function (res) {
  $ajaxUtils.sendGetRequest("https://api.myjson.com/bins/xtwe4", function (res) {
    var message = res.string;
    document.querySelector("#content").innerHTML = message;
  });
});