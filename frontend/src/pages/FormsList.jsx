import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function FormsList() {
  const [forms, setForms] = useState([]);

  const navigate = useNavigate();

  const fetchForms = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/forms"
      );

      setForms(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchForms();
  }, []);

  const deleteForm = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/forms/${id}`
      );

      fetchForms();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">

      <h1 className="mb-4">
        All Forms
      </h1>

      <button
        className="btn btn-success mb-4"
        onClick={() => navigate("/create")}
      >
        Create New Form
      </button>

      {forms.map((form) => (
        <div
          key={form._id}
          className="card p-3 mb-3 shadow-sm"
        >
          <h2>{form.title}</h2>

          <h4>
            Fields: {form.fields.length}
          </h4>

          <div className="mt-2">

            <button
              className="btn btn-primary me-2"
              onClick={() =>
                navigate(`/preview/${form._id}`)
              }
            >
              Preview
            </button>

            <button
              className="btn btn-danger"
              onClick={() => deleteForm(form._id)}
            >
              Delete
            </button>

          </div>
        </div>
      ))}
    </div>
  );
}

export default FormsList;