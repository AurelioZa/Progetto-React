import Homepage from "./Components/Body/Homepage/Homepage.js";
import Dashboard from "./Components/Body/Dashboard/Dashboard";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./css/helper-class.css";
import Layout from "./Components/Layout/Layout";
import PrivateRoute from "./Components/PrivateRoute"

function NoMatch() {
    return (
        <div>
            <h2 className={"white-modules font-primary text-center"}>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}



export default function App() {
    return (
        <div className="App backg-black">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Homepage />} />
                </Route>
                <Route path="*" element={<NoMatch />} />
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Layout />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                </Route>

            </Routes>
        </div>
    );
}