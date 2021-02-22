import React from "react";
import Loading from "../Loading";
import { ContainerUser, ContainerUsers, UserImg } from "./style";

import api from "../../services/api";
import avatar from "../../assets/img/avatar.svg";
import FilterUserPage from "../FilterUserPage";
import { Link } from "react-router-dom";

const ListUsers = () => {
  const [loading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState({});
  const [filterUsers, setFilterUsers] = React.useState({
    perPage: 15,
    page: 1,
    tech: "",
  });

  React.useEffect(() => {
    api
      .get(
        `/users?perPage=${filterUsers.perPage}&page=${filterUsers.page}&tech=${filterUsers.tech}`
      )
      .then((response) => {
        setUsers({ ...response.data });
        setLoading(false);
      });
  }, [filterUsers]);
  return (
    <>
      <FilterUserPage
        filterUsers={filterUsers}
        setFilterUsers={setFilterUsers}
      />

      <ContainerUsers>
        {Object.keys(users).map((usr) => (
          <ContainerUser>
            <Link
              to={`user/${users[usr].id}`}
              key={users[usr].id}
              style={{ width: "100%", height: "100%" }}
            >
              <UserImg
                src={users[usr].avatar_url ? users[usr].avatar_url : avatar}
                alt="avatar"
              />
              <p>{users[usr].name}</p>
            </Link>
          </ContainerUser>
        ))}
      </ContainerUsers>
      {loading && <Loading />}
    </>
  );
};

export default ListUsers;
