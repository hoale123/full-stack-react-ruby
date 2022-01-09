import { NavLink} from "react-router-dom";
import { Menu } from "semantic-ui-react";

function Navbar({ user }) {
  return (
    <Menu style={{ marginBottom: "0px", paddingBottom: "0px" }}>
      {user ? (
        <>
          <Menu.Item>
            <NavLink
              strict
              to="/"  style={{ color: "grey" }}
              activeStyle={{fontWeight: "bold", color: "black"}}>
              Home
            </NavLink>
          </Menu.Item>
          <img
            alt={""}
            src={user.avatar}
            style={{ width: "40px", height: "40px", justifyContent: "center" }}
          />
          <Menu.Item>
            <NavLink
              to="/edit-profile"
              style={{ color: "grey" }}
              activeStyle={{ fontWeight: "bold", color: "black" }}
            >
              Hello, {user.name}!
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink
              to="/logout"
              style={{ color: "grey" }}
              activeStyle={{ fontWeight: "bold", color: "black" }}
            >
              Logout
            </NavLink>
          </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Item>Please Log In</Menu.Item>
          <Menu.Item>
            <NavLink
              to="/login"
              style={{ color: "grey" }}
              activeStyle={{ fontWeight: "bold", color: "black" }}
            >
              Login
            </NavLink>
          </Menu.Item>
        </>
      )}

      {user ? (
        <>
          <Menu.Item>
            <NavLink
              to="/edit-profile"
              style={{ color: "grey" }}
              activeStyle={{ fontWeight: "bold", color: "black" }}
            >
              Edit-Profile
            </NavLink>
          </Menu.Item>
        </>
      ) : (
        <Menu.Item>
          <NavLink
            to="/register"
            style={{ color: "grey" }}
            activeStyle={{ fontWeight: "bold", color: "black" }}>
            Register
          </NavLink>
        </Menu.Item>
      )}
    </Menu>
  );
}
export default Navbar;
