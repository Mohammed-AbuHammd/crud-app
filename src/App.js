import HomePage from "../src/pages/HomePage";
import CreatePage from "../src/pages/CreatePage";
import ViewPage from "../src/pages/ViewPage";
import EditPage from "../src/pages/EditPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
        <Route path="/edit/:id" element={<EditPage />}></Route>
        <Route path="/view/:id" element={<ViewPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
