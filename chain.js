import Transfer from './transfer.js';
import calculateHash from './calculateHash.js';

export default class Chain {
    constructor() {
        this.artChain = [this.createGenesisTransfer()];
        this.difficulty = 1;
    }

    createGenesisTransfer() {
        return new Transfer({title: 'Genesis', owner: 'artChain', manYear: '2022', price: 'Priceless', artImage: 'img/genesisImg.jpg'}, 
        '091fc367a0b2dbac9bb03a863fb377ea1b909c35b0479634e59eace89c82eb3a', '0');
    }

    getLatestTransfer() {
        return this.artChain[this.artChain.length - 1];
    }

    async addTransfer() {
        const title = localStorage.getItem('createTitle');
        const owner = localStorage.getItem('currentLoggedIn');
        const id = self.crypto.randomUUID();
        const price = localStorage.getItem('createPrice'); + ' SEK';
        const manYear = localStorage.getItem('createManYear');
        const artImage = localStorage.getItem('artImage');
        const newTransfer = {title, owner, id, price, manYear, artImage};

        const newHash = await calculateHash(newTransfer);
        const prevHash = this.getLatestTransfer().newHash;

        this.artChain.push(new Transfer(newTransfer, newHash, prevHash));
    }
}