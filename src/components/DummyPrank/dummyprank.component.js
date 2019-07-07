import React from "react";

function MyCheckBox({ name, title, options, handleChange, selectedOptions}){
    return (
      <div className="form-group">
        <label for={name} className="form-label">
          {title}
        </label>
        <div className="checkbox">
          {options.map(option => {
            return (
              <label key={option} className="checkbox-inline">
                <input
                  id={name}
                  name={name}
                  onChange={handleChange}
                  value={option}
                  checked={selectedOptions.indexOf(option) > -1}
                  type="checkbox"
                />
                {option}
              </label>
            );
          })}
        </div>
      </div>
    )
  }

  export default MyCheckBox;