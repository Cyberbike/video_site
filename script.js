document.addEventListener("DOMContentLoaded", function () {
    let correctPasscode = "1731"; // Set your passcode here
    let userPasscode = prompt("This website is restricted to the public. Enter the passcode to access the site:");

    if (userPasscode !== correctPasscode) {
        alert("Incorrect passcode! Access denied.");
        document.body.innerHTML = ""; // Clear the page content
    } else {
        alert("Access granted! Welcome.");
    }
});



const video = document.getElementById('video');
const videoSrc = 'main_video/Website-Video.m3u8'; // 👈 Replace this with the correct path

if (Hls.isSupported()) {
  const hls = new Hls();
  hls.loadSource(videoSrc);
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, () => {
    video.play();
  });
} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
  video.src = videoSrc;
  video.addEventListener('loadedmetadata', () => {
    video.play();
  });
}



// window.onscroll = function() {myFunction()};
// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

let i = 0;
//let txt = 'Extreme Performance'; /* The text */
let speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter(txt, i = 0, speed = 100) {  // Default values for i and speed
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(() => typeWriter(txt, i, speed), speed);  // Pass all variables needed
  }
}

function clear(){
  document.getElementById("type").innerHTML = "";
}



function hotQuote() {
  clear()
  typeWriter("27 - The Difference between Hot and Not")


}

function dieQuote() {
  clear()
  typeWriter("Most people die at 27 and are burried at 72, but most people don't ride 27")
}

function temuQuote() {
  clear()
  typeWriter('Now did you really dream about owning Temu Bike')


}


typeWriter('27 - Only for the bold'); 

setTimeout(hotQuote, 6000);

setTimeout(dieQuote, 12000);

setTimeout(temuQuote, 24000);



let opacity = 0; 
let intervalID = 0; 


function fadeIn() { 
    setInterval(show, 200); 
} 

function show() { 
    var body = document.getElementById("fade"); 
    opacity = Number(window.getComputedStyle(body) 
                    .getPropertyValue("opacity")); 
    if (opacity < 1) { 
        opacity = opacity + 0.1; 
        body.style.opacity = opacity 
    } else { 
        clearInterval(intervalID); 
    } 
} 

setTimeout(fadeIn, 8000);




document.addEventListener("visibilitychange", () => {
   if (document.hidden) {
     for (var i = 1; i <10; i++)
        window.clearInterval(i);
      clear()
   } else {
     clear()
     document.getElementById("type").innerHTML = "Carbon 27 - Order Today";
     show()
      // tab is active
   }
});