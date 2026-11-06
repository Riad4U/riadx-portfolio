const intro = document.getElementById("ai-intro");
const text = document.getElementById("intro-text");
const skip = document.getElementById("skipIntro");


const messages = [

    "Initializing AI Agents...",

    "250 AI Agents Connected ✓",

    "Building Navigation...",

    "Creating AI Experience...",

    "Generating AI Services...",

    "Loading Projects...",

    "Optimizing Performance...",

    "Website Ready ✓"

];

let index = 0;


const messageTimer = setInterval(()=>{


    text.innerText = messages[index];


    index++;


    if(index >= messages.length){


        clearInterval(messageTimer);


    }


},1000);





// Hide intro after animation

setTimeout(()=>{


    intro.style.opacity = "0";


    setTimeout(()=>{


        intro.style.display="none";


    },1000);



},9000);





// Skip button

skip.addEventListener("click",()=>{


    intro.style.opacity="0";


    setTimeout(()=>{

        intro.style.display="none";


    },500);


});