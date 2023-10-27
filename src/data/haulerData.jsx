export const getAllHaulers = () => {
  return fetch("http://localhost:8000/haulers").then((res) => res.json());
};

export const getHaulerByIdWithDock = (haulerId) => {
  return fetch(`http://localhost:8000/haulers/${haulerId}?_expand=docks`).then(
    (res) => res.json()
  );
};
