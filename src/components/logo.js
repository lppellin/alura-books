<<<<<<< HEAD
import logo from '../media/logo.svg' 
import styled from 'styled-components';

const LogoContainer = styled.div `
    display: flex;
    font-size: 30px;
`
const LogoImg = styled.img`
    margin-right: 10px;
`

function Logo () {
    return (
        <LogoContainer>
           <LogoImg src= {logo} alt='logo' className='logo-img'></LogoImg> 
            <p><strong>Alura</strong> Books</p>
        </LogoContainer>
    );
}
export default Logo;
=======
import logo from '../media/logo.svg' 
import styled from 'styled-components';

const LogoContainer = styled.div `
    display: flex;
    font-size: 30px;
`
const LogoImg = styled.img`
    margin-right: 10px;
`

function Logo () {
    return (
        <LogoContainer>
           <LogoImg src= {logo} alt='logo' className='logo-img'></LogoImg> 
            <p><strong>Alura</strong> Books</p>
        </LogoContainer>
    );
}
export default Logo;
>>>>>>> 9db4eebfa7495377fd28c7c40613a549e2f9d5e3
