# BBS-WineToken-Frontend
frontend web3 de BBS-WineToken

Étape 1 : Configuration du projet React.js

Créer le projet React.js :
-------------------------
npx create-react-app wine-dapp
cd wine-dapp
npm install web3 @metamask/detect-provider

Structure du projet :
--------------------
src/
├── components/
│   ├── ConnectWallet.js  // Composant pour connecter le wallet
│   ├── Cellar.js         // Composant pour afficher la cave et les bouteilles
│   ├── AddBottle.js      // Composant pour ajouter des bouteilles
│   └── MintCellar.js     // Composant pour minter une cave
├── App.js               // Composant principal
├── contract/            // Contrat compilé (ABI)
│   └── WineNFT.json      // ABI et adresse du contrat
├── utils/
│   └── web3.js          // Configuration de Web3
├── index.js

Configuration de Web3.js:
------------------------
Dans src/utils/web3.js :
import Web3 from "web3";

let web3;
if (window.ethereum) {
  web3 = new Web3(window.ethereum);
} else {
  alert("Metamask is not installed. Please install Metamask to use this dApp.");
}

export default web3;


Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

    maj du gitignore:
    touch .gitignore && echo "node_modules/" >> .gitignore && git rm -r --cached node_modules ; git status



