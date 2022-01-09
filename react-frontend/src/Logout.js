import { useEffect } from "react";
import { useHistory } from "react-router-dom";

function Logout({ setUser }) {
  const history = useHistory();

  useEffect(() => {
    fetch("http://localhost:9292/login", {
      method: "DELETE",
      credentials: "include",
    })
      .then((r) => {
        // console.log(r);
        localStorage.clear();
        setUser(null);
        history.push("/login");
      });
  }, []);

  return <div>Logging out...</div>;
}

export default Logout;
