import React, {useState} from "react";
import runescapeBosses from "../assets/BossList";


function BossList() {
  const [selectedBoss, setSelectedBoss] = useState(null);

  const handleBossSelect = (event) => {
    setSelectedBoss(event.target.value);
  };

  return (
    <div>
      <label htmlFor="bossSelect">Select a boss:</label>
      <select id="bossSelect" onChange={handleBossSelect}>
        <option value="">Select a boss</option>
        {Object.keys(runescapeBosses).map((bossName) => (
          <option key={bossName} value={bossName}>
            {bossName}
          </option>
        ))}
      </select>
      {selectedBoss && (
        <div>
          <h2>{selectedBoss}</h2>
          <img
            src={runescapeBosses[selectedBoss].image}
            width={200}
            height={250}
            alt={selectedBoss}
          />
        </div>
      )}
    </div>
  );
}

export default BossList;
