import { useEffect, useState } from "react";
import WebRouter from "./config/Routes";
import UserContext from "./config/Usercontext";
import PageLoader from "./components/PageLoader";

function App() {
  const [login, setLogin] = useState({
    id: 0,
    username: "",
    plan_total: "",
    ac_active_date: "",
    sponsor_id: "",
    first_name: "",
    last_name: "",
  });
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const json = localStorage.getItem("_login");
    if (json !== null) {
      setLogin(JSON.parse(json));
    }
    setLoader(false);
  }, [login.id]);

  return (
    <UserContext.Provider value={{ login, setLogin }}>
      {loader ? <PageLoader /> : <WebRouter />}
    </UserContext.Provider>
  );
}

export default App;
