export default function registerArt() {
artCollection.addArt(new Art(createTitle.value, createOwner.value, createPrice.value, createManYear.value, createArtImage.files))
console.log(artCollection)
let artCollectionArray = JSON.parse(localStorage.getItem("artCollectionArray"))
displayArtInfo.innerHTML = ""
for (let i = 0; i < artCollectionArray.length; i += 1) {
    if(artCollectionArray.length > 2){
        displayArtInfo.innerHTML += `
        <img src="${artCollectionArray[i].artImage}" height="100" width="100" />
        <div class="art-content">
          <div class="art-info">
            <h3>${artCollectionArray[i].title}</h3>
            <p>${artCollectionArray[i].owner}</p>
            <p>${artCollectionArray[i].manYear}</p>
            <p>${artCollectionArray[i].price}</p>
          </div>
          <button class="buyArt" data-id="${i}">Köp</button>
        </div>
        `
    }
}
}