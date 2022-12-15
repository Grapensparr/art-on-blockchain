let randomBtn = document.getElementById("randomBtn")
let body = document.getElementById("body")


function randomizeImage() {
fetch("https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Paintings&q=european")
    .then(res => res.json())
    .then(paintings => {
     fetchPainting(paintings);
    console.log("paintings from search", paintings);
    
   /*  paintings.objectIDs.map(painting => {
        console.log("map loop");
    }) */
// pick a random object from the array of objects
    let randomIndex = Math.floor(Math.random() * paintings.objectIDs.length);
    // make a var so its easier to see what is being logged
    let randomObject = paintings.objectIDs[randomIndex];
    // logging the random number on click
    console.log("entered function", randomObject);

    /*     
    
    */

    fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + randomObject)
    .then(res => res.json())
    .then(painting => {
        if(painting.primaryImage !== "" /* && painting.classification == "Paintings" */) {
        console.log("1st log", painting);
        console.log("image url", painting.primaryImage);
        let img = document.createElement("img");
        img.src = painting.primaryImage;
        img.classList = "image";
        body.appendChild(img);
        } else {
            randomizeImage();
        }

        
  /*       if((painting.error && painting.error.message)) {
            fetchPainting(paintings)
        } */
 /*        if(painting.classification == "Paintings" && painting.primaryImage !== "") {
            console.log(painting)
        } else {
            console.log("Not a painting");
            fetchPainting(painting)
        } */
    })
})

function fetchPainting(paintings) {



}
}

randomBtn.addEventListener("click", () => {
randomizeImage();

})
