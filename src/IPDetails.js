import React, { useEffect } from "react";

export default function IPDetails({ children, ...props }) {
  useEffect(() => {
    fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_u7SldfHGwCwxsutVljqXZcRWIwnfG&ipAddress=${
        props.ipAddress.length > 0 ? props.ipAddress : "8.8.8.8"
      }`
    )
      .then((res) => res.json())
      .then((data) => props.setIpData(data))
      .catch((err) => console.log("error : ", err));
  }, [props.ipAddress]);
  return (
  <div className="position-wrapper">
    Hello
    <div className="ip-details_box">{children}</div>

  </div>
  )
}
