import React from 'react';
import { NavbarElement, Navigation , Something, IconBox} from './styled';
import  LogoIcon   from "../../icons/LogoIcon"
import Vector from "../../icons/Vector"
import Person from "../../icons/Person"
import Reload from "../../icons/Reload"
import Cart from "../../icons/Cart"

const links = [
  {
    link:"/home",
    name:"Home"
  },
  {
    link:"/shop",
    name:"Shop"
  },
  {
    link:"/about",
    name:"About"
  },
  {
    link:"/contact",
    name:"Contact"
  }
];


const Navbar = () => {
  return (
    <NavbarElement>
     <LogoIcon />
     <Navigation>
      {
        links.map(({link , name},index)=>{
          return <Something key={index}>{name}</Something>
        })
      }
     </Navigation>
     <IconBox>
      <Person />
      <Reload />
      <Vector />
      <Cart />
     </IconBox>
    </NavbarElement>
  )
}

export default Navbar