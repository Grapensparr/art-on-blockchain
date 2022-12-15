export default class Transfer {
    constructor(data, index = 0, prevHash = "") {
        this.index = index;
        this.data = data;
        this.timestamp = Date.now();
        this.prevHash = prevHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }

    async calculateHash() {
        let msgInt8 = new TextEncoder().encode("salt1234salt"+JSON.stringify(this.data)+this.index+this.timeStamp+this.prevHash+this.nonce);
        let hashBuffer = await crypto.subtle.digest("SHA-256", msgInt8);
        let hashArray = Array.from(new Uint8Array(hashBuffer));
        let hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
        return hashHex;
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