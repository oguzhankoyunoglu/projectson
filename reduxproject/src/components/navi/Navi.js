import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';



const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <Navbar color="danger" light expand="md">
        <NavbarBrand color="light">Kolay Bi</NavbarBrand>
        <NavbarText >Teşekkür ederim.</NavbarText>
      </Navbar>
    </div>
  );
}

export default Navi;