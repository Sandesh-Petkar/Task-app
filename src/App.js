import React, { useState, Fragment } from "react";

import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [inputFields, setInputFields] = useState([
    { Name: '', email: '' }
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
      console.log('values',values)
      
    values.push({ Name: '', email: '' });
    console.log('values2',values)
    setInputFields(values);
    console.log('final',values)
  };

  const handleRemoveFields = index => {
    const values = [...inputFields]; 
    console.log('val',values) 
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (i, e) => {
    const values = [...inputFields];
    if (e.target.name === "Name") {
      values[i].Name = e.target.value;
    } else {
      values[i].email = e.target.value;
    }

    setInputFields(values);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("inputFields", inputFields);
  };

  

  return (
    <>
      <h1>Generating input fields</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div className="form-group col-sm-4">
                <label htmlFor="Name"> Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  name="Name"
                  value={inputField.Name}
                  onChange={e => handleInputChange(index, e)}
                />
              </div>
              <div className="form-group col-sm-4">
                <label htmlFor="email">Email</label>
                <input
                  type="text" 
                  className="form-control" 
                  id="email"
                  name="email"
                  value={inputField.email}
                  onChange={event => handleInputChange(index, event)}
                />
              </div>
              <div className="form-group col-sm-2">
                
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => handleAddFields()}
                >
                  +
                </button>

                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => handleRemoveFields(index)}
                >
                  -
                </button> 

              </div>
            </Fragment>
          ))}
        </div>
        <div className="submit-button">
          <button
            className="btn btn-primary mr-2"
            type="submit"
            onSubmit={handleSubmit}
          >
            Save
          </button>
        </div>
        <br/>
        <pre>
          {JSON.stringify(inputFields, null, 2)}
        </pre>
      </form>
    </>
  );
};

export default App