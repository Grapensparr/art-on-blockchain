import Art from "./art.js";
import calculateHash from "./calculateHash.js";

export default class Transfer {
    constructor(data, newHash, prevHash) {
        this.art = new Art();
        this.data = data;
        this.prevHash  = prevHash ;
        this.newHash = newHash;
        this.timestamp = Date.now();
        this.hash = calculateHash();
        this.nonce = 0;
    }

    async mineBlock(difficulty) {
        let tryHash = await this.calculateHash();

        while (!tryHash.toString().startsWith("0".repeat(difficulty))) {
            this.nonce++;
            tryHash = await this.calculateHash(this.nonce);
        }
        this.hash = tryHash;
    }
}