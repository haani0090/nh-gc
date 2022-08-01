import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-arround"
      sx={{ gap: { sm: "122px ", xs: "40px" }, mt: { sm: "32px", xs: "20px" },justifyContent:'none' }}px='20px'
    >
      <Link to="/">
        <img src={Logo} alt="logo" style={{ width: "68px", height: "68px" }} />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#030303",
            borderBottom: "3px solid #313bac",
          }}
        >
          Home  </Link>

          <a
            href="#exercises"
            style={{ textDecoration: "none", color: "#030303" }}
          >
            {" "}
            Exercises
          </a>
          <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#030303",
           
          }}
        >
          About  </Link>
          <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#030303",
           
          }}
        >
          Contact  </Link>
          
      
      </Stack>
    </Stack>
  );
};

export default Navbar;
