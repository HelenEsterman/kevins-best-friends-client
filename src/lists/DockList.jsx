import { useEffect } from "react"
import { useState } from "react"
import { getAllDocks } from "../data/dockData"

export const DockList = () =>{
    const [allDocks, setAllDocks] = useState([])

    useEffect(()=>{
        getAllDocks().then((docksArray)=>{
            setAllDocks(docksArray)
        })
    }, [])

    return (
        <div>
            <h1>Docks</h1>
            <ol>
            {allDocks.map((dockObj)=>{
                return <li key={dockObj.id}>
                    {dockObj.location}
                </li>
            })}
            </ol>
            
        </div>)
}