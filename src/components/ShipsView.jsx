import { useEffect, useState } from "react";
import { deleteShip, getAllShipsWithHaulers } from "../data/shipData";

export const ShipsView = () => {
  const [allShipsWithHaulers, setAllShipsWithHaulers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleShipListUpdate = (shipId) => {
    setLoading(true);
    //make copy of array before optimistic update
    const shipListBeforeDeletion = [...allShipsWithHaulers];
    //optimistically remove ship from local state before deletion
    const updatedShipsList = allShipsWithHaulers.filter(
      (shipObj) => shipObj.id !== shipId
    );
    setAllShipsWithHaulers(updatedShipsList);
    deleteShip(shipId)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error deleting ship", error);
        window.alert("Error deleting ship");
        setAllShipsWithHaulers(shipListBeforeDeletion);
      });
  };

  useEffect(() => {
    getAllShipsWithHaulers().then((shipsWithHaulersArray) => {
      setAllShipsWithHaulers(shipsWithHaulersArray);
    });
  }, []);

  return (
    <div>
      <h1 className="shipping-ships-header text-4xl">Shipping Ships</h1>
      <div>
        {allShipsWithHaulers.map((shipObj) => {
          return (
            <div
              key={shipObj.id}
              className="ship-list-content flex justify-around border-2 border-green-300"
            >
              <button
                className="ship-lost-btn border-4 bg-emerald-800"
                onClick={() => {
                  handleShipListUpdate(shipObj.id);
                }}
                disabled={loading}
              >
                Lost at Sea
              </button>
              <div>Ship: {shipObj.name}</div>
              <div>Hauler Carrying Ship: {shipObj.hauler.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
