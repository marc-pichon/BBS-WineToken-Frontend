/*
Permettre à l'utilisateur de créer une nouvelle cave.
*/
import React from "react";
import wineNFTContract from "../utils/web3";

const MintCellar = ({ userAddress }) => {
  const mintCellar = async () => {
    try {
      await wineNFTContract.methods
        .mintCellar("My New Cellar")
        .send({ from: userAddress });
      alert("Cellar minted successfully!");
    } catch (error) {
      console.error("Error minting cellar:", error);
    }
  };

  return <button onClick={mintCellar}>Mint New Cellar</button>;
};

export default MintCellar;
