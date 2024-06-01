// create a variable to hold your NFT's
const NFT= [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (Uid,name,fruit,private_key) {
   const mint={
      "uid": Uid,
      "name": name,
      "fruit": fruit,
      "privateKey": private_key
   }
   NFT.push(mint);
   console.log("minted: "+Uid);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   for(i=0;i<NFT.length;i++){
      console.log("\nuid:" + NFT[i].uid);
      console.log("name:" + NFT[i].name);
      console.log("fruit:" + NFT[i].fruit);
      console.log("privatekey:" + NFT[i].privateKey);
   }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("\ntotal supply mineted: " + NFT.length);
}

// call your functions below this line
mintNFT("11563","harsh","apple","black");
mintNFT("11578","tanya","banana","dear");
mintNFT("11498","manu","pear","snow");
mintNFT("11892","mike","mango","light");
listNFTs ();
getTotalSupply();
