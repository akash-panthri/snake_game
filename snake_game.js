import { drawFood, updateFood } from "./food.js";
import { outsideGrid } from "./grid.js";
import {
  SNAKE_SPEED,
  updateSnake,
  drawSnake,
  onSnake,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
  if (gameOver) {
    if (confirm("You lost, Press ok to restart")) {
      window.location = "/";
    }
    return
  }
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;

  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}
function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkingTrial() {
  console.log("its working ");
}
checkingTrial();

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
