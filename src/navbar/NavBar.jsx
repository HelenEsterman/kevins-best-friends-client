import { Link } from "react-router-dom"

export const NavBar = () =>{
    return (<div>
    <div className="navBar flex justify-between">
        <div>
            <Link to="/shippingships">Ships</Link>
        </div>
        <div>
            <Link to="/haulingships">Haulers</Link>
        </div>
        <div>
            <Link to="/docks">Docks</Link>
        </div>
    </div>
    </div>)
}