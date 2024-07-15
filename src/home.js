import Burg from "../assets/images/burger.png";



export default function LoadHome() {

    const container = document.querySelector("#content");
    
    while(container.firstChild) {

        container.removeChild(container.firstChild);

    }
    const header = document.createElement("h1");
    header.textContent = "Welcome to Odin Restaurant!";
    const burger = new Image();
    burger.src = Burg;
    const bottomText = document.createElement("div");
    bottomText.textContent = "We hope you enjoy the food and have a good time.";
    bottomText.classList.toggle("bottomText");

    container.appendChild(header);
    container.appendChild(burger);
    container.appendChild(bottomText);





}