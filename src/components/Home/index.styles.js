import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import BgHome from '../../assets/backgroundImg.jpg'
import { customTheme } from '../../utils/style/variables'
// import { customTheme } from '../../utils/style/variables'
export const Main= styled.main`
    background-image: url(${BgHome}); 
    background-repeat: no-repeat; 
    background-size: cover;
    height:100%; 
    padding:2%
      @media (min-width: 425px) {
       height: 180vw; 
      }
`

export const ContainerBg = styled(Container)`
   padding: 3%; 
`

export const ContentForm = styled(Container)`
    display: flex;
    flex-direction : column; 
    width: 33%; 
    background-color: white; 
    position: relative;
    top: 10%;
    left: 0%;
    padding: 1%; 
    border-radius: 10px; 
        @media (min-width: 425px) and (max-width: 980px) {
            width: 50%; 
        }
`
export const ButtonSubmit = styled.button`
background-color : ${customTheme.colors.primary500}; 
color: ${customTheme.colors.neutral200}; 
&:hover{
    background-color : ${customTheme.colors.neutral100}; 
    color: ${customTheme.colors.neutral200}; 
}
`

export const TitleForm = styled.h2`
    font-weight : lighter; 
    color: ${customTheme.colors.primary500}; 
    text-align: center; 
`