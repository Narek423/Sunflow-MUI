import Paths from "../constants/Paths";
import login from "./login";
const { PROFILE_PATH } = Paths;

const handleLoginButtonClick = ({
  username,
  password,
  setError,
  navigate,
  keepLogedin,
} = {}) => {
  setError("");
  try {
    if (!username || !password) {
      throw Error("Login failed! Fill both fields");
    }
    login(username, password);
    sessionStorage.setItem("token", "logedin");
    keepLogedin && localStorage.setItem("token", "logedin");
    navigate(`/${PROFILE_PATH}`);
  } catch (err) {
    setError(err.message);
  }
};

export default handleLoginButtonClick;
