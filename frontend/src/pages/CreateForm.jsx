import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateForm() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [label, setLabel] = useState("");
  const [type, setType] = useState("text");
  const [options, setOptions] = useState("");

  const [fields, setFields] = useState([]);

  const addField = () => {
    if (!label) return;

    const newField = {
      label,
      type,
      options:
        type === "dropdown" ||
        type === "radio" ||
        type === "checkbox"
          ? options.split(",").map((item) => item.trim())
          : []
    };

    setFields([...fields, newField]);

    setLabel("");
    setType("text");
    setOptions("");
  };

  const saveForm = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/forms",
        {
          title,
          fields
        }
      );

      alert("Form Saved Successfully");

      navigate("/");
    } catch (error) {
      console.log(error);
      alert("Error Saving Form");
    }
  };

  return (
    <div className="container mt-4">

      <div className="card p-4 shadow">

        <h2>Create Form</h2>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Form Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="row">

          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Field Label"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <select
              className="form-select"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="email">Email</option>
              <option value="dropdown">Dropdown</option>
              <option value="radio">Radio</option>
              <option value="checkbox">Checkbox</option>
              <option value="textarea">Textarea</option>
              <option value="date">Date</option>
            </select>
          </div>

          <div className="col-md-4">
            <button
              className="btn btn-primary w-100"
              onClick={addField}
            >
              Add Field
            </button>
          </div>

        </div>

        {(type === "dropdown" ||
          type === "radio" ||
          type === "checkbox") && (
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter options separated by comma"
              value={options}
              onChange={(e) => setOptions(e.target.value)}
            />
          </div>
        )}

        <hr />

        <h4>Fields Added</h4>

        {fields.map((field, index) => (
          <div
            key={index}
            className="card p-2 mb-2"
          >
            <strong>{field.label}</strong>
            {" "}({field.type})

            {field.options.length > 0 && (
              <div>
                Options:
                {field.options.join(", ")}
              </div>
            )}
          </div>
        ))}

        <button
          className="btn btn-success mt-3"
          onClick={saveForm}
        >
          Save Form
        </button>

      </div>

    </div>
  );
}

export default CreateForm;