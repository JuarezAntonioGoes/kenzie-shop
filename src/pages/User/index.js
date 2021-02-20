import React from "react";

import Header from "../../components/Header";

import { useHistory } from "react-router-dom";
import api from "../../services/api";
import InfoUser from "../../components/InfoUser";
import Loading from "../../components/Loading";
import Modal from "../../components/Modal";

const User = () => {
  const history = useHistory();

  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [modalTec, setModalTec] = React.useState(false);

  const idUser = localStorage.getItem("kenzie-user-id");
  const token = localStorage.getItem("kenzie-user-tk");

  const handleFetch = React.useCallback(() => {
    api.get(`/users/${idUser}`).then((response) => {
      console.log(response);
      setUser({ ...response.data });
      setLoading(false);
    });
  }, [idUser]);

  React.useEffect(() => {
    if (!idUser || !token) {
      history.push("/");
    }

    handleFetch();
  }, [idUser, token, history, handleFetch]);

  return (
    <div>
      <Header />
      <InfoUser setModalTec={setModalTec} user={user} />

      {modalTec && (
        <Modal
          setModalTec={setModalTec}
          token={token}
          handleFetch={handleFetch}
        />
      )}

      {loading && <Loading />}
    </div>
  );
};

export default User;
