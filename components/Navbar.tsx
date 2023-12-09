import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "next/link";

const pages = [
  {
    name: "Background",
    link: "/background",
  },
  {
    name: "Mental Health",
    link: "/mental_health",
  },
  {
    name: "Reforms",
    link: "/reforms",
  },
  {
    name: "References",
    link: "/references",
  },
];

export default function Navbar() {
  const titleFontWeight = 600;
  const title = "Singapore: Education and Mental Health";

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      className="h-14 justify-center"
      sx={{ backgroundColor: "#EE2536" }}
    >
      <Container maxWidth="xl">
        {/* When window is big */}
        <div className="flex justify-between items-center w-xl">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: titleFontWeight,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{ display: { xs: "none", md: "flex" } }}
            className="space-x-6"
          >
            {pages.map((page) => (
              <Link key={page.name} href={page.link} className="my-2 block">
                {page.name}
              </Link>
            ))}
          </Box>
        </div>
        {/* When window is small */}
        <div className="flex justify-between items-center w-xl">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              fontWeight: titleFontWeight,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {title}
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
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
              {pages.map((page) => (
                <Link href={page.link}>
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </div>
      </Container>
    </AppBar>
  );
}
