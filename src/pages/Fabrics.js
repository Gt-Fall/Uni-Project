import ListOfFabrics from "../componets/ListofFabrics";
import OrderFormHood from "../componets/OrderFormHood";
import OrderFormSnood from "../componets/OrderFormSnood";
import { useState } from "react";

export default function Fabrics({
  fabrics,
  setShowFormHood,
  showFormHood,
  setShowFormSnood,
  showFormSnood,
  setBasket,
  basket,
}) {
  const [currentID, setCurrentId] = useState("");
  const [currentName, setCurrentName] = useState("");
  const [currentPic, setCurrentPic] = useState("");

  return (
    <>
      {console.log(fabrics)}
      <div class="main">
        <h1 className="fabric-page-header"> Fabric Catalogue </h1>

        <ListOfFabrics
          fabrics={fabrics}
          setShowFormHood={setShowFormHood}
          setShowFormSnood={setShowFormSnood}
          setCurrentId={setCurrentId}
          setCurrentName={setCurrentName}
          setCurrentPic={setCurrentPic}
        />
      </div>
      {showFormHood ? (
        <OrderFormHood
          currentName={currentName}
          currentPic={currentPic}
          setBasket={setBasket}
          setShowFormHood={setShowFormHood}
          basket={basket}
          showFormHood={showFormHood}
        />
      ) : null}
      {showFormSnood ? (
        <OrderFormSnood
          currentName={currentName}
          currentPic={currentPic}
          setBasket={setBasket}
          setShowFormSnood={setShowFormSnood}
          basket={basket}
          showForm={showFormSnood}
        />
      ) : null}
    </>
  );
}
