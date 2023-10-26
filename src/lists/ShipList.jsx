import { useEffect } from "react"
import { useState } from "react"
import { getAllShips } from "../data/shipData"

export const ShipList = () =>{
    const [allShips, setAllShips] = useState([])

    useEffect(()=>{
        getAllShips().then((shipsArray)=>{
            setAllShips(shipsArray)
        })
    }, [])

    return (
        <div>
            <h1>Ships</h1>
            <ol>
            {allShips.map((shipObj)=>{
                return <li key={shipObj.id}>
                    {shipObj.name}
                </li>
            })}
            </ol>
            
        </div>)
}