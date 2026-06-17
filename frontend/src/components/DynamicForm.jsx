function DynamicForm({ form }) {
  return (
    <div>
      <h1>{form.title}</h1>

      {form.fields.map((field, index) => (
        <div key={index}>
          <label>{field.label}</label>

          {field.type === "dropdown" ? (
            <select>
              {field.options.map((option, i) => (
                <option key={i}>{option}</option>
              ))}
            </select>
          ) : (
            <input type={field.type} />
          )}
        </div>
      ))}

      <button>Submit</button>
    </div>
  );
}

export default DynamicForm;