export const getAllHaulers = () => {
  return fetch("http://localhost:8000/haulers").then((res) => res.json());
};

export const getHaulerByIdWithDock = (haulerId) => {
  return fetch(`http://localhost:8000/haulers/${haulerId}?_expand=docks`).then(
    (res) => res.json()
  );
};

export const putEditedHauler = (haulerId, editedHauler) => {
  const putOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(editedHauler),
  };
  return fetch(`http://localhost:8000/haulers/${haulerId}`, putOptions);
};
