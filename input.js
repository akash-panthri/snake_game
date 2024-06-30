let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      console.log("ArrowUp");
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      console.log("ArrowDown");
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      console.log("ArrowLeft");
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      console.log("ArrowRight");
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;

    default:
      break;
  }
});
export function getInputdirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
