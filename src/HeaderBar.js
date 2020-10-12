import React from "react";

export default function HeaderBar({ children }) {
  return (
    <div className="header-bar_background">
      <h1>IP Address Tracker</h1>
      {children}
    </div>
  );
}
