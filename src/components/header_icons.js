<<<<<<< HEAD
import perfil from '../media/perfil.svg';
import sacola from '../media/sacola.svg';
import styled from 'styled-components';

const Icons = styled.ul `
    display: flex;
    align-items: center;   
    cursor: pointer;
`
const Icon = styled.li `
    margin-right: 40px;
    width: 25px;
`
const icons = [perfil, sacola]

function HeaderIcons () {
    return (
        <Icons>
            { icons.map( (icon) => (
              <Icon key={icon}><img src={icon} alt='icon' ></img></Icon>
            )) }
        </Icons>
    )
    }
=======
import perfil from '../media/perfil.svg';
import sacola from '../media/sacola.svg';
import styled from 'styled-components';

const Icons = styled.ul `
    display: flex;
    align-items: center;   
    cursor: pointer;
`
const Icon = styled.li `
    margin-right: 40px;
    width: 25px;
`
const icons = [perfil, sacola]

function HeaderIcons () {
    return (
        <Icons>
            { icons.map( (icon) => (
              <Icon key={icon}><img src={icon} alt='icon' ></img></Icon>
            )) }
        </Icons>
    )
    }
>>>>>>> 9db4eebfa7495377fd28c7c40613a549e2f9d5e3
export default HeaderIcons;