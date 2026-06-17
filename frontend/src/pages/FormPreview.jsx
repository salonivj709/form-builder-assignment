import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function FormPreview() {
  const { id } = useParams();

  const [form, setForm] = useState(null);
  const [answers, setAnswers] = useState({});

  useEffect(() => {
    fetchForm();
  }, []);

  const fetchForm = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/forms/${id}`
      );

      setForm(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (label, value) => {
    setAnswers({
      ...answers,
      [label]: value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/submissions",
        {
          formId: form._id,
          answers,
        }
      );

      alert("Form Submitted Successfully");

      console.log(answers);
    } catch (error) {
      console.log(error);
      alert("Submission Failed");
    }
  };

  if (!form) {
    return <h3>Loading...</h3>;
  }

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow">
        <h1>{form.title}</h1>

        <form onSubmit={submitForm}>
          {form.fields.map((field, index) => (
            <div key={index} className="mb-3">
              <label className="form-label">
                {field.label}
              </label>

              {field.type === "text" && (
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) =>
                    handleChange(
                      field.label,
                      e.target.value
                    )
                  }
                />
              )}

              {field.type === "email" && (
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) =>
                    handleChange(
                      field.label,
                      e.target.value
                    )
                  }
                />
              )}

              {field.type === "number" && (
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) =>
                    handleChange(
                      field.label,
                      e.target.value
                    )
                  }
                />
              )}

              {field.type === "date" && (
                <input
                  type="date"
                  className="form-control"
                  onChange={(e) =>
                    handleChange(
                      field.label,
                      e.target.value
                    )
                  }
                />
              )}

              {field.type === "textarea" && (
                <textarea
                  className="form-control"
                  onChange={(e) =>
                    handleChange(
                      field.label,
                      e.target.value
                    )
                  }
                />
              )}

              {field.type === "dropdown" && (
                <select
                  className="form-select"
                  onChange={(e) =>
                    handleChange(
                      field.label,
                      e.target.value
                    )
                  }
                >
                  <option value="">
                    Select Option
                  </option>

                  {field.options.map(
                    (option, idx) => (
                      <option
                        key={idx}
                        value={option}
                      >
                        {option}
                      </option>
                    )
                  )}
                </select>
              )}

              {field.type === "radio" && (
                <>
                  {field.options.map(
                    (option, idx) => (
                      <div
                        key={idx}
                        className="form-check"
                      >
                        <input
                          type="radio"
                          name={field.label}
                          value={option}
                          className="form-check-input"
                          onChange={(e) =>
                            handleChange(
                              field.label,
                              e.target.value
                            )
                          }
                        />

                        <label className="form-check-label">
                          {option}
                        </label>
                      </div>
                    )
                  )}
                </>
              )}

              {field.type === "checkbox" && (
                <>
                  {field.options.map(
                    (option, idx) => (
                      <div
                        key={idx}
                        className="form-check"
                      >
                        <input
                          type="checkbox"
                          value={option}
                          className="form-check-input"
                          onChange={(e) => {
                            const current =
                              answers[
                                field.label
                              ] || [];

                            if (
                              e.target.checked
                            ) {
                              handleChange(
                                field.label,
                                [
                                  ...current,
                                  option,
                                ]
                              );
                            } else {
                              handleChange(
                                field.label,
                                current.filter(
                                  (item) =>
                                    item !==
                                    option
                                )
                              );
                            }
                          }}
                        />

                        <label className="form-check-label">
                          {option}
                        </label>
                      </div>
                    )
                  )}
                </>
              )}
            </div>
          ))}

          <button
            className="btn btn-primary"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormPreview;