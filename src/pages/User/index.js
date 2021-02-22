import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import InfoUser from "../../components/InfoUser";
import Loading from "../../components/Loading";
import api from "../../services/api";

const User = () => {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  const { id } = useParams();

  React.useEffect(() => {
    setLoading(true);
    api.get(`/users/${id}`).then((response) => {
      setUser({ ...response.data });
      setLoading(false);
    });
  }, [id]);

  return (
    <>
      <Header />
      <InfoUser user={user} admin={false} />

      {loading && <Loading />}
    </>
  );
};

export default User;
