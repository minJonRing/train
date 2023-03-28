import React, { useState } from "react";
import "./menu.scss";
const MenuItem = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);
  const [time, setTime] = useState(false);

  const handleItemClick = (event, title, children) => {
    event.preventDefault();
    if (!children) {
      console.log(title);
      return;
    }
    setTime(true);
    setExpanded(!expanded);
    setTimeout(() => {
      setTime(false);
    }, 600);
  };
  return (
    <li className="menu-item">
      <a
        className="menu-item-link"
        href="#"
        onClick={(e) => handleItemClick(e, title, children)}
      >
        {title}
      </a>
      {children && (
        <ul
          className="menu"
          style={{
            height: expanded
              ? time
                ? children.length * 31 + "px"
                : "auto"
              : 0,
          }}
        >
          {children}
        </ul>
      )}
    </li>
  );
};

const Menu = ({ items }) => {
  const renderMenuItem = (item) => {
    const { title, children } = item;
    return (
      <MenuItem key={title} title={title}>
        {children && children.map((child) => renderMenuItem(child))}
      </MenuItem>
    );
  };

  return <ul className="menu">{items.map((item) => renderMenuItem(item))}</ul>;
};

export default Menu;
