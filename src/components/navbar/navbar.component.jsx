import { Box, IconButton, Menu } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.styles.scss";
import { BootstrapButton } from "../custom-button/bootstrapButton.button";

function Navbar() {
  const menuName = [
    { to: "/", name: "Home" },
    { to: "/about", name: "About" },
    { to: "/donations", name: "Donations" },
    { to: "/contact", name: "Contact" },
  ];
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        document.querySelector(".fix").classList.add("fixed");
      } else {
        document.querySelector(".fix").classList.remove("fixed");
      }
    });
  });

  return (
    <div className="nav" id="navbar">
      <div className="fix ">
        <div className="nav-bar">
          <div className="nav-logo">
            <Link to="/">
              <img
                className="img-logo"
                src="https://assets.website-files.com/5e7ff3ec0c4ef4c974fa99e3/5e7ff57adad44d1f072965b6_logo.svg"
                alt="logo"
              />
            </Link>
          </div>

          <div className="menu-bar">
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <div className="menu">
                {menuName.map(({ to, name }, idx) => (
                  <Link to={to} key={idx}>
                    <BootstrapButton sx={{ color: "#eee" }} variant="contained">
                      {name}
                    </BootstrapButton>
                  </Link>
                ))}
              </div>
            </Box>
            {/* ------------------------DropDown------------------------------------------------ */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <div className="menu">
                <IconButton color="inherit" size="large" onClick={handleOpenNavMenu}>
                  <MenuIcon sx={{ color: "white" }} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {menuName.map(({ to, name }, idx) => (
                    <Link to={to} key={idx}>
                      <BootstrapButton
                        sx={{
                          display: "block",
                          width: "200px",
                          color: "black",
                          borderRadius: 0,
                          "&:hover": {
                            color: "white",
                            backgroundColor: "brown",
                          },
                        }}
                        onClick={handleCloseNavMenu}
                        variant="contained"
                      >
                        {name}
                      </BootstrapButton>
                    </Link>
                  ))}
                </Menu>
              </div>
            </Box>
            {/* ------------------------DropDown------------------------------------------------ */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
