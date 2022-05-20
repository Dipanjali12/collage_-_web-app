var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function (event) {
    content = event.results[0][0].transcript;
    console.log(event);
    document.getElementById("textbox").innerHTML = content;
    if (content.includes("take my selfie")) {
        speak();
    }
}
function speak() {
    synth = window.speechSynthesis;
    speakdata = "taking your selfie in five seconds"
    utterthis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function () {
        capture();
    }, 5000)
}
Webcam.set({
    width: 350,
    height: 250,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");

function capture() {
    Webcam.snap(function (data) {
        document.getElementById("result").innerHTML = "<img id='selfie' src=" + data + ">";
    })


}
