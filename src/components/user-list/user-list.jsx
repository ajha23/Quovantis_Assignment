import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";

import "./user-list.scss";

export const UserList = (item) => {
  const { url } = useRouteMatch();
  return (
    <div>
      <li id={item.id} className="display-container" key={item.id}>
        <NavLink to={`${url}/${item.id}`} activeClassName="selected">
          <span id={item.id}>{item.first_name}</span>
          <span id={item.id}>{item.last_name}</span>
        </NavLink>
      </li>
    </div>
  );
};
