import lasagnaImage from "../assets/images/lasagna.png";
import pastaImage from "../assets/images/pasta.png";
import pizzaImage from "../assets/images/pizza.png";
import ribsImage from "../assets/images/ribs.png";
import shawarmaImage from "../assets/images/shawarma.png";
import soupImage from "../assets/images/soup.png";
import tacoImage from "../assets/images/taco.png";




export default function loadMenu() {

    const container = document.querySelector("#content");
    
    while(container.firstChild) {

        container.removeChild(container.firstChild);

    }

    const header = document.createElement("h1");
    header.textContent = "Menu";
    const menuContainer = document.createElement("div");
    menuContainer.classList.toggle("menuGrid");
    container.appendChild(header);
    container.appendChild(menuContainer);

    const itemsLibrary= [];

    const itemNames = ["Lasagna",
                       "Spaghetti Bolognese",
                       "Pizza",
                       "Ribs",
                       "Shawarma",
                       "Soup",
                       "Tacos"

    ];
    
    const itemDesc = ["Delicious lasagna made with the best sauce and cheese!",
                      "Amazing pasta with meatballs and homemade sauce.",
                      "Your choice of toppings pizza made on the spot!",
                      "Quality meat ribs with a side of mashed potatoes",
                      "Shawarma with your choice of meat.",
                      "Soup of the day made with fresh ingredients",
                      "Tacos with a selection of dipping sauces."
    ];

    const itemImg = [lasagnaImage,
                     pastaImage,
                     pizzaImage,
                     ribsImage,
                     shawarmaImage,
                     soupImage,
                     tacoImage
    ];

    const itemsLength = itemNames.length;

    for (let i = 0; i < itemsLength; i++) {

        const item = new menuItems(itemNames[i], itemDesc[i], itemImg[i]);
        itemsLibrary.push(item);


    }

    itemsLibrary.forEach( (item) => {

        const itemContainer = document.createElement("div");
        const itemHead = document.createElement("h2");
        const itemBody = document.createElement("div");
        const itemDescription = document.createElement("div");
        const itemImage = new Image();
        itemImage.src = item.img;
        itemHead.textContent = item.name;
        itemDescription.textContent = item.desc;


        itemBody.appendChild(itemDescription);
        itemBody.appendChild(itemImage);
        itemContainer.appendChild(itemHead);
        itemContainer.appendChild(itemBody);
        menuContainer.appendChild(itemContainer);



    })


}


class menuItems {

    constructor(name, desc, image) {

        this.name = name;
        this.desc = desc;
        this.img = image;
    }

    get name() {

        return this._name;
    }

    set name(value) {

        this._name = value;
    }

    get desc() {

        return this._desc;
    }

    set desc(value) {

        this._desc = value;
    }

    get img() {

        return this._img;

    }

    set img(value) {

        this._img = value;
    }


}

