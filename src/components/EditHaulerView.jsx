import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHaulerByIdWithDock, putEditedHauler } from "../data/haulerData";
import { getAllDocks } from "../data/dockData";

export const EditHauler = () => {
  const [haulerWithDock, setHaulerWithDock] = useState({});
  const [allDocks, setAllDocks] = useState([]);
  const { haulerId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getHaulerByIdWithDock(haulerId).then((haulerWithDockObj) => {
      setHaulerWithDock(haulerWithDockObj);
    });
    getAllDocks().then((dockArray) => {
      setAllDocks(dockArray);
    });
  }, [haulerId]);

  const handleHaulerStateChange = (event) => {
    const haulerWithDockCopy = { ...haulerWithDock };
    haulerWithDockCopy[event.target.name] = event.target.value;
    haulerWithDockCopy.dock_id = parseInt(haulerWithDockCopy.dock_id);
    setHaulerWithDock(haulerWithDockCopy);
  };

  const handleEditedHaulerSave = (event) => {
    event.preventDefault();
    const updatedHauler = {
      id: haulerWithDock.id,
      name: haulerWithDock.name,
      dock_id: haulerWithDock.dock_id,
    };
    putEditedHauler(haulerId, updatedHauler).then(navigate("/haulingships"));
  };

  return (
    <form>
      <h1 className="edit-hauler-header text-4xl">Edit Hauler</h1>
      <fieldset>
        <label>
          Hauler Name:{" "}
          <input
            type="text"
            name="name"
            value={haulerWithDock.name ? haulerWithDock.name : ""}
            onChange={handleHaulerStateChange}
          />
        </label>
      </fieldset>
      <fieldset>
        <label>Dock: </label>
        <select
          name="dock_id"
          value={haulerWithDock.dock_id}
          onChange={handleHaulerStateChange}
        >
          {allDocks.map((dockObj) => {
            return (
              <option key={dockObj.id} value={dockObj.id}>
                {dockObj.location}
              </option>
            );
          })}
        </select>
      </fieldset>
      <button
        className="edit-hauler-btn border-4 bg-emerald-800"
        onClick={handleEditedHaulerSave}
      >
        Save Changes
      </button>
    </form>
  );
};
