import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import InterfaceContainer from "./InterfaceContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App d-flex justify-content-center">
        <Routes>
          <Route path="/" element={<Navigate to="/interface" />} />
          <Route path="/interface" element={<InterfaceContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
