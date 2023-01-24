import { Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import AddFilmPage from "./pages/AddFilmPage";
import AllFilmsPage from "./pages/AllFilmsPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllFilmsPage />} />
        <Route path="/add-movie" element={<AddFilmPage />} />
      </Routes>
    </div>
  );
}

export default App;
