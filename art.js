export default class Art {
    constructor(title, owner, manYear) {
        this.title = title;
        this.owner = owner;
        this.id = self.crypto.randomUUID();
        localStorage.setItem("artId", this.id);
        this.price = Math.floor(1000 + Math.random() * 9000);
        this.manYear = manYear;
        this.artImage = this.randomizeImage();
    }

    async randomizeImage() {
        try {
          const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Paintings&q=european_american");
          const paintings = await response.json();
          // pick a random object from the array of objects
          let randomIndex = Math.floor(Math.random() * paintings.objectIDs.length);
          // make a var so its easier to see what is being logged
          let randomObject = paintings.objectIDs[randomIndex];
          // logging the random number on click
      
          const response2 = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + randomObject);
          const painting = await response2.json();
          if(painting.primaryImage !== "") {
            this.artImage = painting.primaryImage;
            localStorage.setItem('artImage', this.artImage)
            this.title = painting.title;
            localStorage.setItem('title', this.title)
            this.manYear = painting.objectDate;
            localStorage.setItem('manYear', this.manYear)
            /* et img = document.createElement("img");
            img.src = painting.primaryImage;
            img.classList = "image";
            body.appendChild(img); */
          } else {
            this.randomizeImage();
          }
        } catch (error) {
          console.error(error);
        }
      }
}