export default class ArtList {
    constructor() {
        this.artCollection = [
            {
                title: "Fantail Wrens",
                owner: "Sofia McGill",
                id: "3c16ef2d-1e35-45e5-aeb2-7ceeea5d9dfa",
                price: "200 SEK",
                manYear: "2020",
                artImage: "./img/mcgill-library-y4PqRPqSako-unsplash.jpg",
            }, 
            {
                title: "Cascades d'Ouzoud, Morocco",
                owner: "Tamara Menzi",
                id: "ce249578-08ae-4b77-8fbe-a78b26c42833",
                price: "550 SEK",
                manYear: "2019",
                artImage: "./img/tamara-menzi-n-vnWQmmVoY-unsplash.jpg",
            },
        ];
        localStorage.setItem("artCollectionArray", JSON.stringify(this.artCollection))
    }

    addArt(art) {
        this.artCollection.push(art);
        localStorage.removeItem("artCollectionArray")
        localStorage.setItem("artCollectionArray", JSON.stringify(this.artCollection))
    }

}