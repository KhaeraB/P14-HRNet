import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import BgHome from '../../assets/backgroundImg.jpg'
import { customTheme } from '../../utils/style/variables'
// import { customTheme } from '../../utils/style/variables'

export const ContainerBg = styled(Container)`
    background-image: url(${BgHome}); 
    background-repeat: no-repeat; 
    height: 42vw; 
`

export const ContentForm = styled(Container)`
    display: flex;
    flex-direction : column; 
    width: 33%; 
    margin: 0 auto; 
    background-color: white; 
    position: relative;
    top: 40px;
    left: 0%;
    padding: 1%; 
    border-radius: 10px; 
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