var chicago = $(".chi");
chicago.on("click", toggleTest);

function toggleTest() {
  var testBox = $(".chicago");
  testBox.toggle();
}

var newYork = $(".NY");
newYork.on("click", toggleNY);

function toggleNY() {
  var nyBox = $(".newYork");
  nyBox.toggle();
}

var losAngeles = $(".la");
losAngeles.on("click", toggleLA);

function toggleLA() {
  var laBox = $(".losAngeles");
  laBox.toggle();
}
