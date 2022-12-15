export default class Send {
    constructor(data, index = 0, prevHash = "") {
        this.index = index;
        this.data = data;
        this.timestamp = Date.now();
        this.prevHash = prevHash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }
}