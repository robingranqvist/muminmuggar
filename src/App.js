import { Route, Routes } from "react-router-dom";

import Index from "@pages/Index/Index";

import "./Global.css";

function App() {
  return (
    <div className="wrapper__global">
      <Routes>
        <Route path="/" element={<Index />}></Route>
      </Routes>
    </div>
  );
}

export default App;
