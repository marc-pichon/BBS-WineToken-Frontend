/*
Ajouter une bouteille dans une cave existante.
*/
import React, { useState } from "react";
import wineNFTContract from "../utils/web3";

const AddBottle = ({ userAddress }) => {
  const [cellarId, setCellarId] = useState("");
  const [bottleId, setBottleId] = useState("");

  const addBottle = async () => {
    try {
      await wineNFTContract.methods
        .addBottleToCellar(cellarId, bottleId)
        .send({ from: userAddress });
      alert("Bottle added to cellar successfully!");
    } catch (error) {
      console.error("Error adding bottle to cellar:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Cellar ID"
        value={cellarId}
        onChange={(e) => setCellarId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Bottle ID"
        value={bottleId}
        onChange={(e) => setBottleId(e.target.value)}
      />
      <button onClick={addBottle}>Add Bottle</button>
    </div>
  );
};

export default AddBottle;
