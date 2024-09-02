(function (window) {
    var byeSpeaker = {};
    byeSpeaker.speak = function(name) {
        
        console.log(speakWord + " " + name);
        
        var greeting = document.createElement("h2");
    greeting.textContent = speakWord + " " + name;
    document.body.appendChild(greeting);
    };

    var speakWord = "Good Bye";
    window.byeSpeaker = byeSpeaker;
})(window);