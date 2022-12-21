let displayArtInfo = document.getElementById('displayArt');

export default function displayArt() {
    let artCollectionArray = JSON.parse(localStorage.getItem("artCollectionArray"))
    for (let i = 0; i < artCollectionArray.length; i += 1) {
        if(artCollectionArray.length < 3){
            displayArtInfo.innerHTML += `
            <img src="${artCollectionArray[i].artImage}" height="100" width="100" />
            <div class="art-content">
              <div class="art-info">
                <h3>${artCollectionArray[i].title}</h3>
                <p>${artCollectionArray[i].owner}</p>
                <p>${artCollectionArray[i].manYear}</p>
                <p>${artCollectionArray[i].price}</p>
              </div>
            </div>
            `
        }
    }
}