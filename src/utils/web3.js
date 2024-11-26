
import Web3 from 'web3';
import abi from '../contract/WineNFTabi.js';



// Configuration et connexion au provider
//const provider = process.env.REACT_APP_WEB3_PROVIDER || 'https://mainnet.infura.io/v3/YOUR-PROJECT-ID';
const provider =  'https://mainnet.infura.io/v3/d990668b388c431caa0cbbb817e7578a' || 'https://mainnet.infura.io/v3/YOUR-PROJECT-ID';

//const provider = process.env.REACT_APP_WEB3_PROVIDER;
//const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

// Affichage du contenu de l'ABI
//console.log("Contenu de l'ABI :", abi);
// Pour un affichage plus lisible, vous pouvez utiliser
//console.log("Contenu de l'ABI (formaté) :", JSON.stringify(abi, null, 2));
console.log("Nombre de méthodes dans l'ABI:", abi.length);

const web3 = new Web3(provider);

// Vérification que l'ABI est correctement importé
if (!abi) {
  throw new Error("ABI non trouvé");
}
// L'ABI devrait déjà être un objet JSON si importé correctement
  // Pas besoin de JSON.parse si le fichier .abi est déjà au format JSON
  const contractABI = Array.isArray(abi) ? abi : JSON.parse(abi);


// Adresse du contrat (WETH sur Mainnet)
  const contractAddress = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2';
  
  // Vérification de l'adresse
  if (!web3.utils.isAddress(contractAddress)) {
    throw new Error('Adresse de contrat invalide');
  }

// Création de l'instance du contrat
const wineNFTContract = new web3.eth.Contract(contractABI, contractAddress);

// Lister les méthodes disponibles
console.log("Méthodes disponibles:", Object.keys(wineNFTContract.methods));

// Vérifier que le contrat est bien initialisé
console.log("Adresse du contrat:", wineNFTContract.options.address);

// Tester une méthode simple (par exemple 'name' si c'est un ERC721)
const addressTo = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'; // adresse Ethereum du destinataire
const name = 'Nom du Cellar';  // nom du cellar
const location = 'Location du Cellar'; // localisation
const reputation = 5; // réputation 

wineNFTContract.methods.mintCellar(addressTo, name, location, reputation)
        .call()
        .then(result => {
            console.log("Résultat de la simulation mintCellar:", result);
        })
        .catch(error => {
            console.error("Erreur lors de l'appel à mintCellar:", error);
        });
 
export default wineNFTContract;

