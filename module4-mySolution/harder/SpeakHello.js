(function (window) {
  var helloSpeaker = {};
  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);

    var greeting = document.createElement("h2");
    greeting.textContent = speakWord + " " + name;
    document.body.appendChild(greeting);
  };

  var speakWord = "Hello ";

  window.helloSpeaker = helloSpeaker;
})(window);