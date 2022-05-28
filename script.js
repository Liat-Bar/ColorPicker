// צבע 1:
const redColor1 = document.getElementById("red");
const greenColor1 = document.getElementById("green");
const blueColor1 = document.getElementById("blue");
const btColor1 = document.getElementById("bt");
const boxColor1 = document.getElementById("box");


btColor1.addEventListener("click", () => {
  let red = redColor1.value;
  let green = greenColor1.value;
  let blue= blueColor1.value;

  console.log(red,green,blue)

  boxColor1.style.backgroundColor = `rgb(${red},${green},${blue})`
})

//צבע 2:
const rColor = document.getElementById("r");
const gColor = document.getElementById("g");
const bColor = document.getElementById("b");
const btnColor = document.getElementById("btn");
const box2Color = document.getElementById("box2");


btnColor.addEventListener("click", () => {
  let red2 = rColor.value;
  let green2 = gColor.value;
  let blue2= bColor.value;
  console.log(red2,green2,blue2)
  box2Color.style.backgroundColor = `rgb(${red2},${green2},${blue2})`
})