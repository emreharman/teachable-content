import React from "react";

const Header = (props) => {
  console.log("header props", props);
  return (
    <header
      style={{
        height: "100px",
        backgroundColor: "gray",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <img
          style={{ height: "100px" }}
          src="https://cdn.logo.com/hotlink-ok/logo-social.png"
        />
      </div>
      <p>{props.username}</p>
    </header>
  );
};

export default Header;
