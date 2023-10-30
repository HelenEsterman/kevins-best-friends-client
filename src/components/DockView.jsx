import { useEffect, useState } from "react";
import { getAllDocksWithHaulers } from "../data/dockData";

export const DockView = () => {
  const [allDocksWithHaulers, setAllDocksWithHaulers] = useState([]);

  useEffect(() => {
    getAllDocksWithHaulers().then((docksWithHaulersArray) => {
      setAllDocksWithHaulers(docksWithHaulersArray);
    });
  }, []);

  return (
    <div>
      <h1 className="docks-header text-4xl">Docks</h1>
      <div>
        {allDocksWithHaulers.map((dockObj) => {
          return (
            <div
              key={dockObj.id}
              className="dock-list-content flex justify-around border-2 border-green-300"
            >
              <div>
                {dockObj.location}
                <ul>
                  {dockObj.haulers.map((haulerObj) => {
                    return (
                      <li
                        key={haulerObj.id}
                        className="dock-hauler-list list-disc"
                      >
                        {haulerObj.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>Capacity: {dockObj.capacity} tons</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
