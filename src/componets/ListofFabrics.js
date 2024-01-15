import React, { useState } from "react";
import FabricItem from "./FabricItem";

export default function ListOfFabrics({
  fabrics,
  setShowFormHood,
  setShowFormSnood,
  setCurrentId,
  setCurrentName,
  setCurrentPic,
}) {
  return (
    <>
      <section>
        <ul className="fabric-list">
          {fabrics.map((fabrics) => (
            <FabricItem
              key={fabrics.id}
              fabrics={fabrics}
              setShowFormHood={setShowFormHood}
              setShowFormSnood={setShowFormSnood}
              setCurrentId={setCurrentId}
              setCurrentName={setCurrentName}
              setCurrentPic={setCurrentPic}
            />
          ))}
        </ul>
      </section>
    </>
  );
}
