import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHaulerByIdWithDock } from "../data/haulerData";
import { getAllDocks } from "../data/dockData";

export const EditHauler = () => {
  const [allHaulersWithDocks, setAllHaulersWithDocks] = useState([]);
  const [allDocks, setAllDocks] = useState([]);
  const { haulerId } = useParams();

  useEffect(() => {
    getHaulerByIdWithDock(haulerId).then((haulerWithDockObj) => {
      setAllHaulersWithDocks(haulerWithDockObj);
    });
    getAllDocks().then((dockArray) => {
      setAllDocks(dockArray);
    });
  }, [haulerId]);

  return (
    <form>
      <h1 className="edit-hauler-header text-4xl">Edit Hauler</h1>
      <fieldset>
        <label>
          Hauler Name: <input type="text" name="" />
        </label>
      </fieldset>
      <fieldset>
        <label>Dock: </label>
        <select>
          {allDocks.map((dockObj) => {
            return <option key={dockObj.id}>{dockObj.location}</option>;
          })}
        </select>
      </fieldset>
    </form>
  );
};
