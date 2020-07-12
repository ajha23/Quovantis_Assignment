import React, { useEffect, useState } from "react";

import { getUser } from "../../axios";

import { useUserState } from "../../state/user/user";

import { UserList } from "../../components/user-list";
import { AccessInfo } from "../../components/access-info";

import "./dashboard.scss";

export const DashBoard = () => {
  const { token } = useUserState();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getUser(page);
        setData(data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [page]);

  const handelMoreClick = () => {
    setPage(page + 1);
  };

  return token ? (
    <ul className="card">
      <div className="header-container">
        <b>Welcome</b>
      </div>
      {data.map((item) => (
        <UserList key={item.id} {...item} />
      ))}
      <div className="btn-container">
        <button className="btn-more" onClick={handelMoreClick}>
          Page {page}
        </button>
      </div>
    </ul>
  ) : (
    <AccessInfo />
  );
};
