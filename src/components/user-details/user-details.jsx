import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import { getUserDetails } from "../../axios";
import { useUserState } from "../../state/user/user";

import { AccessInfo } from "../access-info";

import "./user-details.scss";

export const UserDetails = () => {
  const { token } = useUserState();
  const [data, setData] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    const fetchUserDetails = async () => {
      const {
        data: { data },
      } = await getUserDetails(userId);
      setData(data);
    };
    fetchUserDetails();
  }, [userId]);

  return token ? (
    <div className="card center">
      <img src={data.avatar} alt="Avatar" />
      <h2>{data.first_name + " " + data.last_name}</h2>
      <p>{data.email}</p>
      <NavLink to="/users" activeClassName="selected">
        <img
          src="https://img.icons8.com/flat_round/64/000000/circled-left-2--v1.png"
          alt="go to dashboard"
          style={{ height: "30px", width: "30px" }}
        />
      </NavLink>
    </div>
  ) : (
    <AccessInfo />
  );
};
