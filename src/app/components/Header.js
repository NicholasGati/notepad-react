import React from "react";

export const Header = (props) => {
  const liStyle = {
      marginRight: 20
  }

  return (
    <div className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li style={liStyle}>Home</li>
            <li style={liStyle}>About</li>
            <li style={liStyle}>Work</li>
            <li style={liStyle}>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
