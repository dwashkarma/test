import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link, useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Logout from "@mui/icons-material/Logout";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
function NavBar() {
  const navigate = useNavigate();
  const [drawer, setDrawer] = useState(null);
  const open = Boolean(drawer);
  const handleClick = (event) => {
    setDrawer(event.currentTarget);
  };
  const handleClose = () => {
    setDrawer(null);
  };
  const handleLogout = () => {
    setDrawer(null);
    let a = window.confirm("Are you sure you want to logout?");
    if (a) {
      navigate("/");
    }
  };
  return (
    <div className="bg-success  text-light">
      <nav className="d-flex justify-content-evenly">
        <header className="m-2 text-uppercase fs-3  fw-semibold">Portal</header>

        <ul className="mt-2 fs-4 p-1 d-flex justify-content-evenly  list-unstyled">
          <li className="mx-2">
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
              to={"/general"}
            >
              General
            </Link>
          </li>
          <li className="mx-2">
            <Link
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
              to={"/science"}
            >
              Science
            </Link>
          </li>
        </ul>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>D</Avatar>
          </IconButton>
        </Tooltip>
        <Menu
          anchorEl={drawer}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </nav>
    </div>
  );
}

export default NavBar;
