import { useEffect } from "react"
import { useState } from "react"
import { getAllHaulers } from "../data/haulerData"

export const HaulerList = () =>{
    const [allHaulers, setAllHaulers] = useState([])

    useEffect(()=>{
        getAllHaulers().then((haulersArray)=>{
            setAllHaulers(haulersArray)
        })
    }, [])

    return (
        <div>
            <h1>Haulers</h1>
            <ol>
            {allHaulers.map((haulerObj)=>{
                return <li key={haulerObj.id}>
                    {haulerObj.name}
                </li>
            })}
            </ol>
            
        </div>)
}