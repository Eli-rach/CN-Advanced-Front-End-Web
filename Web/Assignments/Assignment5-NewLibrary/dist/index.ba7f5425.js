let score;
let pc;
let cameraMin;
// let button = document.getElementById("menu");
// button.addEventListener('click', beginGame)
class Floor {
    constructor(x, y, sprite, name){
        this.x = x;
        this.y = y;
        this.body = sprite;
        this.name = name;
    }
}
class player {
    constructor(){
        this.size = 50;
        this.body = new Sprite(this.size, this.size);
        this.jumpAllowed = false;
    }
    move() {
        if (keyIsDown(LEFT_ARROW)) {
            if (this.body.x < -15) this.body.x = 515;
            else if (this.body.vel.x <= -5) this.body.vel.x = -5;
            else this.body.vel.x -= .25;
        }
        if (keyIsDown(RIGHT_ARROW)) {
            if (this.body.x > 515) this.body.x = -15;
            else if (this.body.vel.x >= 5) this.body.vel.x = 5;
            else this.body.vel.x += .25;
        }
        if (keyIsDown(UP_ARROW) && this.jumpAllowed) {
            this.jumpAllowed = false;
            this.body.vel.y = -10;
        }
        if (keyIsDown(DOWN_ARROW)) {
            if (!this.jumpAllowed) this.body.vel.y += .5;
        }
    }
    checkJump() {
        if (this.body.colliding(floor1.body) || this.body.colliding(floor2.body)) this.jumpAllowed = true;
    }
}
function setup() {
    score = -1;
    updateScore();
    cameraMin = 0;
    createCanvas(512, 1024);
    fill(255, 0, 0);
    pc = new player();
    floor1 = new Floor(30, 100, new Sprite(30, 100, 1000, 500, "static"), "floor1");
    //x, y, width, height, static
    floor2 = new Floor(30, -300, new Sprite(252, -300, 150, 5, "static"), "floor2");
    world.gravity.y = 10;
}
function draw() {
    camera.on();
    clear();
    background("#add8e6");
    pc.move();
    pc.checkJump();
    console.log(pc.jumpAllowed);
    if (pc.body.y < cameraMin) camera.y = pc.body.y;
    changeMin();
    randomPlatform();
    checkDeath();
}
function changeMin() {
    if (pc.body.colliding(floor1.body) && floor1.body.y < floor2.body.y) {
        console.log("changed to floor 1");
        cameraMin = floor1.body.y;
    }
    if (pc.body.colliding(floor2.body) && floor2.body.y < floor1.body.y) {
        console.log("changed to floor 2");
        cameraMin = floor2.body.y;
    }
}
function randomPlatform() {
    let randomx = 0;
    let randomy = 0;
    if (pc.body.colliding(floor2.body) && floor2.body.y < floor1.body.y) {
        while(randomx > 500 || randomx < 10)// console.log("randomx: " + randomx)
        randomx = getRandomInt(525);
        while(randomy > cameraMin - 100)// console.log("Random-Y: "+ randomy)
        randomy = getRandomInt(cameraMin - 300);
        updateScore();
        floor1.body.remove();
        floor1.body = new Sprite(randomx, randomy, 150, 5, "static");
    }
    if (pc.body.colliding(floor1.body) && floor1.body.y < floor2.body.y) {
        while(randomx > 500 || randomx < 10)// console.log("randomx: " + randomx)
        randomx = getRandomInt(525);
        while(randomy > cameraMin - 100)// console.log("Random-Y: "+ randomy)
        randomy = getRandomInt(cameraMin - 300);
        updateScore();
        floor2.body.remove();
        floor2.body = new Sprite(randomx, randomy, 150, 5, "static");
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function updateScore() {
    score += 1;
    scoreEl = document.getElementById("score");
    scoreEl.innerHTML = "Score: " + score;
}
function checkDeath() {
    if (pc.body.y > cameraMin + 250) {
        pc.body.remove();
        floor1.body.remove();
        floor2.body.remove();
        setup();
    }
}

//# sourceMappingURL=index.ba7f5425.js.map
