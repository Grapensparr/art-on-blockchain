export default class Art {
    constructor(title, owner, price, manYear) {
        this.title = title;
        this.owner = owner;
        this.id = self.crypto.randomUUID();
        localStorage.setItem("artId", this.id);
        this.price = price;
        this.manYear = manYear;
        this.artImage = this.randomizeImage();
    }

    randomizeImage() {
    fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Paintings&q=european_american")
        .then(res => res.json())
        .then(paintings => {
        console.log("paintings from search", paintings);
        // pick a random object from the array of objects
        let randomIndex = Math.floor(Math.random() * paintings.objectIDs.length);
        // make a var so its easier to see what is being logged
        let randomObject = paintings.objectIDs[randomIndex];
        // logging the random number on click
        console.log("entered function", randomObject);

        fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + randomObject)
        .then(res => res.json())
        .then(painting => {
            if(painting.primaryImage !== "") {
            console.log("1st log", painting);
            console.log("image url", painting.primaryImage);
            this.artImage = painting.primaryImage;
            this.title = painting.title;
            /* et img = document.createElement("img");
            img.src = painting.primaryImage;
            img.classList = "image";
            body.appendChild(img); */
            } else {
                this.randomizeImage();
            }
        })
    })
    }
/*     getOwner() {
        //Funktion som sätter inloggad användare som owner på konstverket.
    } */
}