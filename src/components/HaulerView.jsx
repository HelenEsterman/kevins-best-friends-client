import { useEffect, useState } from "react";
import { getAllHaulers } from "../data/haulerData";
import { useNavigate } from "react-router-dom";

export const HaulerView = () => {
  const [allHaulers, setAllHaulers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllHaulers().then((haulersArray) => {
      setAllHaulers(haulersArray);
    });
  }, []);

  return (
    <div>
      <h1 className="haulers-header text-4xl">Haulers</h1>
      <div>
        {allHaulers.map((haulerObj) => {
          return (
            <div
              key={haulerObj.id}
              className="hauler-list-content flex justify-around border-2 border-green-300"
            >
              <div>{haulerObj.name}</div>{" "}
              <button
                className="edit-hauler-btn border-4 bg-emerald-800"
                onClick={() => {
                  navigate(`/haulingships/${haulerObj.id}`);
                }}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
