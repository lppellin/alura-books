<<<<<<< HEAD
import Logo from './logo';
import HeaderOptions from './header_options';
import HeaderIcons from './header_icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color:whitesmoke;
  display: flex;
  justify-content: center;
`

function Header() {
  return (
    <HeaderContainer>
      <Link to="/"><Logo /></Link>
      <HeaderOptions />
      <HeaderIcons />
    </HeaderContainer>
  )
}
export default Header;
=======
import Logo from './logo';
import HeaderOptions from './header_options';
import HeaderIcons from './header_icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color:whitesmoke;
  display: flex;
  justify-content: center;
`

function Header() {
  return (
    <HeaderContainer>
      <Link to="/"><Logo /></Link>
      <HeaderOptions />
      <HeaderIcons />
    </HeaderContainer>
  )
}
export default Header;
>>>>>>> 9db4eebfa7495377fd28c7c40613a549e2f9d5e3
