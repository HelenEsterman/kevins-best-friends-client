export const getAllShips = () =>{
    return fetch("http://localhost:8000/ships").then((res)=>res.json())
}

export const getAllShipsWithHaulers = () =>{
    return fetch("http://localhost:8000/ships?_expand=haulers").then((res)=>res.json())
}

export const deleteShip = (shipId) => {
    return fetch(`http://localhost:8000/ships/${shipId}`, {method: "DELETE"})
}
