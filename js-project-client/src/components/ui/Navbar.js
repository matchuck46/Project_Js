import "bootstrap/dist/css/bootstrap.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="bg-dark">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              to={"/"}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Movie library
            </Link>
          </Typography>
          <Button
            component={Link}
            to={"/add-movie"}
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Dodaj film
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
