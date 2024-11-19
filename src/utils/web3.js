
// Initialise le contrat

import Web3 from "web3";
import WineNFT from "../contract/WineNFT.json";

let web3;
if (window.ethereum) {
  web3 = new Web3(window.ethereum);
} else {
  alert("Metamask is not installed. Please install Metamask to use this dApp.");
}

const contractAddress = "ADRESSE_DU_CONTRAT"; // Remplace par l'adresse de ton contrat
const wineNFTContract = new web3.eth.Contract(WineNFT.abi, contractAddress);

export default wineNFTContract;
