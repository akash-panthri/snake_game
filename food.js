import { randomGridPosition } from "./grid.js";
import { expandSnake, onSnake } from "./snake.js";


let food = getRandomFoodPosition();
const expansionRate = 1
export function updateFood() {
if (onSnake(food)){
    expandSnake(expansionRate);
    food = getRandomFoodPosition();
}


}
export function drawFood(gameBoard) {
    console.log("draw")
  
    const foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;

    foodElement.classList.add("food");
    gameBoard.appendChild(foodElement);
  
}

function getRandomFoodPosition(){
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition;
}

