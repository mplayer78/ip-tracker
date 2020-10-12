import React, { useState } from "react";

export default function SearchBox(props) {
  const [formValue, setFormValue] = useState("");

  return (
    <div className="search-box">
      <form
        action="post"
        onSubmit={(e) => {
          e.preventDefault();
          props.setIpAddress(formValue);
        }}
      >
        <div className="input-container">
          <input
            type="text"
            name="ipAddressInput"
            id="ipAddressInput"
            value={formValue}
            placeholder={props.placeholder}
            onChange={(e) => setFormValue(e.target.value)}
          />
        </div>
        <button type="submit">{`>`}</button>
      </form>
    </div>
  );
}
