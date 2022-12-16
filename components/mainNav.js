import React, { useState } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import AskRobertIcon from "../assets/icons/ask-roberto";
import R3Icon from "../assets/icons/r3";


export default function MainNav() {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">
        <R3Icon />
      </NavbarBrand>
      <NavbarBrand href="/">
        <AskRobertIcon />
      </NavbarBrand>
    </Navbar>
  );
}
