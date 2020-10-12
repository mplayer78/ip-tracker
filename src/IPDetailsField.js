import React from "react";

export default function IPDetailsField({ field, value }) {
  return (
    <div className="ip-details-field">
      <h3>{field}</h3>
      <h2>{value}</h2>
    </div>
  );
}
