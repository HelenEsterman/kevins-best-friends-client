import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { HomeView } from "./components/HomeView";
import "./index.css";
import { NavBar } from "./navbar/NavBar";
import { ShipsView } from "./components/ShipsView";
import { HaulerView } from "./components/HaulerView";
import { EditHauler } from "./components/EditHaulerView";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<HomeView />} />
        <Route path="shippingships" element={<ShipsView />} />
        <Route path="/haulingships">
          <Route index element={<HaulerView />} />
          <Route path=":haulerId" element={<EditHauler />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
