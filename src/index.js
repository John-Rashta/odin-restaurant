import "../assets/styles/styles.css";
import Home from "./home.js";
import About from "./about.js";
import Menu from "./menu.js";


Home();


document.querySelector("#home").addEventListener("click", Home);
document.querySelector("#about").addEventListener("click", About);
document.querySelector("#menu").addEventListener("click", Menu);


