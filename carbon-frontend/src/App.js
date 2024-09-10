import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./Pages/HomePage"
import CalEmissions from "./Pages/CalEmissions"
import Login from "./Pages/Login"
import Visualize from "./Pages/Visualize"
import EstimateSink from "./Pages/EstimateSink"
import Solutions from "./Pages/Solutions"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/emissions" element={<CalEmissions/>} />
        <Route exact path="/visualize" element={<Visualize/>} />
        <Route exact path="/sink" element={<EstimateSink/>} />
        <Route exact path="/solutions" element={<Solutions/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
