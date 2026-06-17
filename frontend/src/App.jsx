import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import FormsList from "./pages/FormsList";
import CreateForm from "./pages/CreateForm";
import FormPreview from "./pages/FormPreview";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link
        to="/"
        className="navbar-brand"
      >
        Form Builder
      </Link>

      <Link
        to="/create"
        className="btn btn-success"
      >
        Create Form
      </Link>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<FormsList />}
        />

        <Route
          path="/create"
          element={<CreateForm />}
        />

        <Route
          path="/preview/:id"
          element={<FormPreview />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;