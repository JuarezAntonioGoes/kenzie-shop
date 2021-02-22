import React from "react";

import Header from "../../components/Header";

import { useHistory } from "react-router-dom";
import api from "../../services/api";
import InfoUser from "../../components/InfoUser";
import Loading from "../../components/Loading";
import ModalCadastroUser from "./ModalCadastroUser";

import { UserContext } from "../../context/UserContext";

const MyUser = () => {
  const history = useHistory();

  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [modalTec, setModalTec] = React.useState(false);

  const idUser = localStorage.getItem("kenzie-user-id");
  const token = localStorage.getItem("kenzie-user-tk");

  const handleFetch = React.useCallback(() => {
    setLoading(true);
    api.get(`/users/${idUser}`).then((response) => {
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
    <UserContext token={token} handleFetch={handleFetch}>
      <Header />
      <InfoUser
        token={token}
        setModalTec={setModalTec}
        user={user}
        admin={true}
      />

      {modalTec && (
        <ModalCadastroUser
          setModalTec={setModalTec}
          token={token}
          handleFetch={handleFetch}
        />
      )}

      {loading && <Loading />}
    </UserContext>
  );
};

export { MyUser };
