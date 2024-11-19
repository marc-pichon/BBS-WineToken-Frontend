/*
Afficher les informations sur la cave et ses bouteilles.
*/
import React, { useEffect, useState } from "react";
import wineNFTContract from "../utils/web3";

const Cellar = ({ userAddress }) => {
  const [cellarData, setCellarData] = useState([]);
  const [bottleDetails, setBottleDetails] = useState([]);

  useEffect(() => {
    const fetchCellar = async () => {
      try {
        // Récupérer les caves de l'utilisateur
        const cellarIds = await wineNFTContract.methods
          .balanceOf(userAddress)
          .call();

        const bottlesInCellar = [];
        for (let i = 0; i < cellarIds; i++) {
          const cellarId = await wineNFTContract.methods
            .tokenOfOwnerByIndex(userAddress, i)
            .call();
          const bottles = await wineNFTContract.methods
            .getBottlesInCellar(cellarId)
            .call();
          bottlesInCellar.push(...bottles);
        }

        setBottleDetails(bottlesInCellar);
      } catch (error) {
        console.error("Error fetching cellar data:", error);
      }
    };

    if (userAddress) fetchCellar();
  }, [userAddress]);

  return (
    <div>
      <h2>Your Cellar</h2>
      {bottleDetails.length > 0 ? (
        <ul>
          {bottleDetails.map((bottle, index) => (
            <li key={index}>
              Domain: {bottle.domain}, Vintage: {bottle.vintage}
            </li>
          ))}
        </ul>
      ) : (
        <p>No bottles found in your cellar.</p>
      )}
    </div>
  );
};

export default Cellar;
