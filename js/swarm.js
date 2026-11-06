
const canvas = document.getElementById("cursorCanvas");
const ctx = canvas.getContext("2d");
let animationRunning = true;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



let agents = [];

const colors = [
    "#008cff",
    "#00c6ff",
    "#ffffff"
];


// Build locations

const targets = [

    {
        x: window.innerWidth / 2,
        y: 80
    },

    {
        x: window.innerWidth / 2,
        y: window.innerHeight * 0.35
    },

    {
        x: window.innerWidth / 2,
        y: window.innerHeight * 0.65
    },

    {
        x: window.innerWidth / 2,
        y: window.innerHeight * 0.85
    }

];



class Agent {


    constructor(index){


        this.x = Math.random()*canvas.width;

        this.y = Math.random()*canvas.height;


        let target =
        targets[index % targets.length];


    this.targetX = target.x + 
     (Math.random()*500 - 250);


    this.targetY = target.y +
    (Math.random()*300 - 150);



        this.speed =
        Math.random()*3+0.5;


        this.color =
        colors[
        Math.floor(Math.random()*colors.length)
        ];

    }




    update(){


        let dx =
        this.targetX-this.x;


        let dy =
        this.targetY-this.y;


        this.x += dx*0.015*this.speed;

        this.y += dy*0.015*this.speed;


    }




draw(){


    ctx.save();


    // glow

    ctx.shadowBlur = 0;



    // mouse pointer shape

    ctx.beginPath();


    ctx.moveTo(this.x,this.y);


    ctx.lineTo(
        this.x,
        this.y + 18
    );


    ctx.lineTo(
        this.x + 6,
        this.y + 13
    );


    ctx.lineTo(
        this.x + 12,
        this.y + 22
    );


    ctx.lineTo(
        this.x + 16,
        this.y + 19
    );


    ctx.lineTo(
        this.x + 10,
        this.y + 9
    );


    ctx.lineTo(
        this.x + 18,
        this.y + 9
    );


    ctx.closePath();



    ctx.fillStyle = this.color;

    ctx.fill();



    ctx.restore();


}

}





// Create agents

for(let i=0;i<80;i++){

    agents.push(new Agent(i));

}




function animate(){

    if(!animationRunning) return;


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    agents.forEach(agent=>{

        agent.update();

        agent.draw();

    });


    requestAnimationFrame(animate);

}




window.addEventListener("resize",()=>{


canvas.width=window.innerWidth;

canvas.height=window.innerHeight;


});