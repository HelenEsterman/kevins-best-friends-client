import { DockList } from "../lists/DockList"
import { HaulerList } from "../lists/HaulerList"
import { ShipList } from "../lists/ShipList"

export const HomeView = () =>{
    return (
        <div>
            <ShipList/>
            <HaulerList/>
            <DockList/>
        </div>)
}