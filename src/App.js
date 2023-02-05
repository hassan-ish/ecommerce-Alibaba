import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import StoreList from "./Pages/StoreList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<StoreList />} />
      </Routes>
    </div>
  );
}

export default App;
