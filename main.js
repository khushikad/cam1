var speechrecognition = window.webkitSpeechRecognition;
var recognition = new speechrecognition();


function save() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();


}

recognition.onresult = function (event) {
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    if (content == "take my selfie") {
        speak();


    }
}

function speak() {
    var synth = window.speechSynthesis;
    saythis = new SpeechSynthesisUtterance("Get ready for your selfie in 5 seconds");
    synth.speak(saythis);

    Webcam.attach(camera);
    setTimeout(function () {
        takephoto();
         save();
    }, 5000);
}

camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
    image_format: "jpeg",
    jpeg_quality: 90


});

function takephoto() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='myimage' src='" + data_uri + "'>";

    });

}

function save(){
link=document.getElementById("link");
image=document.getElementById("myimage").src;
link.href=image;
link.click();

}