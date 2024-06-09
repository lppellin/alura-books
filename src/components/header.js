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
