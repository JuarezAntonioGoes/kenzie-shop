import React from "react";

import Header from "../../components/Header";

import { useHistory } from "react-router-dom";
import api from "../../services/api";
import InfoUser from "../../components/InfoUser";
import Loading from "../../components/Loading";

const User = () => {
  const history = useHistory();

  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  const idUser = localStorage.getItem("kenzie-user-id");
  const token = localStorage.getItem("kenzie-user-tk");

  React.useEffect(() => {
    if (!idUser || !token) {
      history.push("/");
    }
    api.get(`/users/${idUser}`).then((response) => {
      console.log(response);
      setUser({ ...response.data });
      setLoading(false);
    });
  }, [idUser, token, history]);

  return (
    <div>
      <Header />
      <InfoUser user={user} />
      {loading && <Loading />}
    </div>
  );
};

export default User;
