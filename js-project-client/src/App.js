import { Route, Routes } from "react-router-dom";
import AllFilmsPage from "./pages/AllFilms";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllFilmsPage />} />
      </Routes>
    </div>
  );
}

export default App;
