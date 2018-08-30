document.querySelector(".button-finish").addEventListener("click", function () {
	var self = this;
  var name = "";

  // Call the server to get the name
  $ajaxUtils.sendGetRequest("/data/finish-welcome.txt", function (request) {
    self.name = request.responseText;
    document.querySelector("#content").innerHTML = self.name;
  });
});