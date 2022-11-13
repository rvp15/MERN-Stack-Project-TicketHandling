import { MdOutlineLogin } from "react-icons/md";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutuser } from "../features/auth/authSlice";


function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {

    dispatch(logoutuser(user));
    navigate("/");
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <h3>
            <AiTwotoneHome />
           
          </h3>
        </Link>
      </div>
      <ul>
        {user ? (
      <>
        <li>
        <Link to="/profile">
          <h3>  <FaUser />
          {user.name}
          </h3>
        </Link>
          </li>
            <li>
               <button className="btn" onClick={handleLogout}>
                <FaSignOutAlt />
                Logout
              </button>
            </li></>
        ) : (
          <ul>
            {" "}
            <li>
              <Link to="/login">
                <MdOutlineLogin />
                Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser />
                Register
              </Link>
            </li>
          </ul>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
