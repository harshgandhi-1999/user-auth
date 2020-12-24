import React, { useContext } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import AuthContext from "../../context/authContext";
import "./mainnavigation.css";

const MainNavigation = () => {
  const context = useContext(AuthContext);
  return (
    <Navbar expand="lg" variant="dark" className="navbar-style">
      <LinkContainer to="/">
        <Navbar.Brand href="/">My App</Navbar.Brand>
      </LinkContainer>
      <Nav className="ml-auto" activeKey={window.location.pathname}>
        {!context.token && (
          <React.Fragment>
            <LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/signup">
              <Nav.Link>SignUp</Nav.Link>
            </LinkContainer>
          </React.Fragment>
        )}
        {context.token && (
          <Button
            style={{ background: "#FF5722", border: "none" }}
            onClick={context.logout}
          >
            Logout
          </Button>
        )}
      </Nav>
    </Navbar>
  );
};

export default MainNavigation;
