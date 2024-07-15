export default function loadAbout() {

    const container = document.querySelector("#content");
    
    while(container.firstChild) {

        container.removeChild(container.firstChild);

    }

    const header = document.createElement("h1");
    header.textContent = "About Us";
    const infoText = document.createElement("div");
    infoText.textContent = "We are a new up-and-coming restaurant with a wild range of dishes and options to choose from as you dine in our establishment.";
    const endText = document.createElement("div");
    endText.textContent = "Incase of side effects or any other symptoms we take no responsibility whatsoever. Side effects may include some stuff, we haven't actually tested anything out.";
    
    container.appendChild(header);
    container.appendChild(infoText);
    container.appendChild(endText);




}
