import Transfer from './transfer.js';

export default class Chain {
    constructor() {
        this.artChain = [this.createGenesisBlock()];
        this.difficulty = 1;
    }

    createGenesisBlock() {
        //Här behöver vi andra ingående. Gissar på "from", "to" och "artId"
        return new Transfer({"user": "Genesis", "work": 0});
    }

    getLatestTime() {
        return this.artChain[this.artChain.length -1];
    }

    async addTransfer(newTransfer) {
        newTransfer.prevHash = this.getLatestTime().hash;
        newTransfer.mineBlock(this.difficulty);
        this.artChain.push(newTransfer);
    }

    isChainValid() {
        for (let i = 1; i < this.artChain.length; i++) {
            const currentBlock = this.artChain[i];
            const prevBlock = this.artChain[i -1];

            let testHash = currentBlock.calculateHash().then(hash => {
                console.log("testHash", hash);
                if (currentBlock.hash !== hash) {
                    console.log("Invalid. Not the same hash.", currentBlock.hash, hash);
                }
            });

            if (currentBlock.prevHash !== prevBlock.hash) {
                console.log("Invalid: Not same prev hash");
            }

            console.log("VALID");
        }
    }
}