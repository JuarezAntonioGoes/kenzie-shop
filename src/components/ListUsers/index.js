import React from "react";
import Loading from "../Loading";
import { ContainerUser, ContainerUsers, UserImg } from "./style";

import api from "../../services/api";
import avatar from "../../assets/img/avatar.svg";

const ListUsers = () => {
  const [loading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState({});

  React.useEffect(() => {
    api.get(`/users/`).then((response) => {
      setUsers({ ...response.data });
      setLoading(false);
    });
  }, []);
  return (
    <>
      <ContainerUsers>
        {Object.keys(users).map((usr) => (
          <ContainerUser key={users[usr].id}>
            <UserImg
              src={users[usr].avatar_url ? users[usr].avatar_url : avatar}
              alt="avatar"
            />
            <p>
              <span>Nome:</span> {users[usr].name}
            </p>
            <p>
              <span>Email:</span>
              {users[usr].email}
            </p>
          </ContainerUser>
        ))}
      </ContainerUsers>
      {loading && <Loading />}
    </>
  );
};

export default ListUsers;
