let canvas = document.getElementById('game');
let ctx = canvas.getContext("2d");

let fon = new Image();
fon.src = "img/fon.png";

let apple = new Image();
apple.src = "img/apple.png";

const box = 32;

let score = 0;

let food = {
    x: Math.floor(Math.random() * 17 + 1) * box,
    y: Math.floor(Math.random() * 15 + 3) * box
}

let snake = [];

snake[0] = {
    x: 9 * box,
    y: 8 * box
};

document.addEventListener('keydown', direction);

let dir;

function direction(event) {
    if (event.keyCode == 37 && dir != "right") {
        dir = "left";
    }
    if (event.keyCode == 38 && dir != "down") {
        dir = "up";
    }
    if (event.keyCode == 39 && dir != "left") {
        dir = "right";
    }
    if (event.keyCode == 40 && dir != "up") {
        dir = "down";
    }
}

/ /

function game() {
    ctx.drawImage(fon, 0, 0);
    ctx.drawImage(apple, food.x, food.y);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = "blue";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.fillStyle = "yellow";
    ctx.font = "32px Verdana";
    ctx.fillText(score, 2 * box, 1.6 * box);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if (snakeX == food.x && snakeY == food.y) {
        score++;
        food = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box
        }
    } else {
        snake.pop();
    }


    if (dir == "left") {
        snakeX -= box;
    }
    if (dir == "right") {
        snakeX += box;
    }
    if (dir == "up") {
        snakeY -= box;
    }
    if (dir == "down") {
        snakeY += box;
    }
    let head = {
        x: snakeX,
        y: snakeY
    };



    snake.unshift(head);

}

setInterval(game, 125 );