const canvas = document.getElementById("cursorCanvas");
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


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

        this.stage = Math.floor(Math.random() * 4);

        this.setTarget();

        this.speed = Math.random() * 2 + 1;

        this.color =
        colors[Math.floor(Math.random()*colors.length)];

    }

setTarget(){


    const positions = [

        // Navbar

        {
            x: canvas.width / 2,
            y: 80
        },


        // Hero

        {
            x: canvas.width / 2,
            y: canvas.height * 0.35
        },


        // Services

        {
            x: canvas.width / 2,
            y: canvas.height * 0.55
        },


        // Projects

        {
            x: canvas.width / 2,
            y: canvas.height * 0.75
        }

    ];



    let target = positions[this.stage];


    this.targetX =
    target.x + (Math.random()*300-150);


    this.targetY =
    target.y + (Math.random()*150-75);


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

        ctx.fill();

    }

}




// Create cursors

for(let i=0;i<80;i++){

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
setInterval(()=>{


    agents.forEach(agent=>{


        agent.stage++;


        if(agent.stage > 3){

            agent.stage = 0;

        }


        agent.setTarget();


    });


},2000);

animate();





window.addEventListener("resize",()=>{

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});