const canvas = document.getElementById("cursorCanvas");
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



// AI Cursor Agents

let agents = [];

const colors = [
    "#008cff",
    "#00c6ff",
    "#ffffff"
];



class Agent {

    constructor(){

        this.x = Math.random() * canvas.width;

        this.y = Math.random() * canvas.height;


        this.targetX = canvas.width / 2;

        this.targetY = canvas.height / 2;


        this.speed = Math.random() * 2 + 1;


        this.size = 8;


        this.color =
        colors[Math.floor(Math.random()*colors.length)];

    }



    update(){


        let dx = this.targetX - this.x;

        let dy = this.targetY - this.y;


        this.x += dx * 0.01 * this.speed;

        this.y += dy * 0.01 * this.speed;


    }



    draw(){


        ctx.beginPath();


        ctx.moveTo(this.x,this.y);


        ctx.lineTo(
            this.x + 15,
            this.y + 5
        );


        ctx.lineTo(
            this.x + 5,
            this.y + 15
        );


        ctx.closePath();



        ctx.fillStyle = this.color;


        ctx.shadowBlur = 15;

        ctx.shadowColor = this.color;


        ctx.fill();


    }


}




// Create 200 AI agents

for(let i=0;i<200;i++){

    agents.push(new Agent());

}




function animate(){


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


animate();





// Resize Fix

window.addEventListener("resize",()=>{


    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;


});