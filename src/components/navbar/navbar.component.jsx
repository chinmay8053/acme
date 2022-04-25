import { Box, IconButton, Menu } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.styles.scss";
import { BootstrapButton } from "../custom-button/bootstrapButton.button";
import i18n from "../../i18n";
import LanguageIcon from "@mui/icons-material/Language";

function Navbar() {
  const menuName = [
    { to: "/", name: "Home", es: "Casa" },
    { to: "/about", name: "About", es: "Acerca de" },
    { to: "/donations", name: "Donate", es: "Donar" },
    { to: "/contact", name: "Contact", es: "Contacto" },
  ];
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [i18nElNav, seti18nElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    const navbar = document.querySelector(".fix");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navbar.classList.add("fixed");
      } else {
        navbar.classList.remove("fixed");
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
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, alignItems: "center" }}>
              <div className="menu">
                {menuName.map(({ to, name, es }, idx) => (
                  <Link to={to} key={idx}>
                    <BootstrapButton sx={{ color: "#eee" }} variant="contained">
                      {i18n.language === "en" ? name : es}
                    </BootstrapButton>
                  </Link>
                ))}
              </div>
              <div
                onClick={(e) => {
                  seti18nElNav(e.currentTarget);
                }}
              >
                <LanguageIcon sx={{ margin: "0 10px", cursor: "pointer", color: "white" }} />
              </div>
              <Menu
                id="menu-appbar"
                anchorEl={i18nElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(i18nElNav)}
                onClose={(e) => seti18nElNav(null)}
              >
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
                  onClick={() => {
                    seti18nElNav(null);
                    i18n.changeLanguage("en");
                  }}
                  variant="contained"
                >
                  english
                </BootstrapButton>
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
                  onClick={() => {
                    seti18nElNav(null);
                    i18n.changeLanguage("es");
                  }}
                  variant="contained"
                >
                  spanish
                </BootstrapButton>
              </Menu>
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
