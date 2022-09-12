import { Route, Routes } from "react-router-dom";
import { Home } from "./pages";

function App() {
  return (
    <>
      <div>Navbar</div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
