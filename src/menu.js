




export default function loadMenu() {

    const container = document.querySelector("#content");
    
    while(container.firstChild) {

        container.removeChild(container.firstChild);

    }

    const header = document.createElement("h1");
    header.textContent = "Menu";
    const menuContainer = document.createElement("div");
    menuContainer.classList.toggle("menuGrid");

    const itemNames = []


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

