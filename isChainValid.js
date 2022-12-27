import calculateHash from './calculateHash.js';

export default function isChainValid(chain) {
    for (let i = 1; i < chain.artChain.length; i++) {
        const currentBlock = chain.artChain[i];
        const previousBlock = chain.artChain[i - 1];

        /* if (currentBlock.newHash !== localStorage.getItem('calculateHash')) {
            console.log('Invalid new hash for one or more blocks.', currentBlock.newHash, "  -  ", calculateHash(currentBlock));
            return false;
        }

        console.log(currentBlock.newHash, calculateHash());
         */
        if (currentBlock.prevHash !== previousBlock.newHash) {
            console.log('Invalid previous hash for one or more blocks.', currentBlock.prevHash, previousBlock.hash);
            let validation = 'failure';
            localStorage.setItem('validation', validation);
            return false;
        }
    }
 
    console.log("VALID");
    let validation = 'success';
    localStorage.setItem('validation', validation);
    return true;
}