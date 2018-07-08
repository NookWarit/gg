import React from "react";

const FormSumit = props => (
  <div style={{ margin: 2 }}>
    <form onSubmit={props.handleSumitForm} style={{ display: "flex" }}>
      <input
        type="text"
        onChange={props.handleInputChange}
        style={{ flex: 9, height: 30 }}
        value={props.message}
      />
      <button type="submit" style={{ height: 35, flex: 1 }}>
        <strong>Add to List</strong>
      </button>
    </form>
  </div>
);
export default FormSumit;
