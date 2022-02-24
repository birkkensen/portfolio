import { Home, Project, NotFound } from "./pages";
import "./index.css";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default App;
