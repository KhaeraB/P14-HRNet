import styled from 'styled-components'

import { customTheme } from '../../utils/style/variables'
import { Container } from 'react-bootstrap'

export const LogoImg = styled.img`
  width: 50%;
  height:15%; 
`
export const LogoImgFooter = styled.img`
  width: 8%;
  height:8%; 
`
export const TitleLogo = styled.div`
  display: flex; 
  flex-direction: row; 
  justify-content: flex-start; 
  align-items:center;
  a{
   width: 40%; 
   text-decoration: none; 
   display: flex; 
   align-items: center; 
  }
  h1{
   color: ${customTheme.colors.neutral200}; 
   font-weight: lighter; 
   &:hover{
      color: ${customTheme.colors.neutral200}; 
   }
  }
`
export const ContentNavBar = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${customTheme.colors.primary500};
  padding: 10px;
   &>*{
      margin:9px; 
      text-decoration: none; 
    
      color: ${customTheme.colors.neutral200}; 
         &:hover{
            color: ${customTheme.colors.neutral200}; 
         }
   }
`
export const ContentFooter = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${customTheme.colors.primary500};
  padding: 12px;
   &>*{
      margin:1%; 
      text-decoration: none; 
      color: ${customTheme.colors.neutral200}; 
         &:hover{
            color: ${customTheme.colors.neutral100}; 
         }
   }
`
export const TitleFooter = styled.div`
  display: flex; 
  flex-direction: row; 
  justify-content: center; 
  align-items:center;
  p{
   font-size:0.7rem; 
  }
  &>*{
   color: ${customTheme.colors.neutral200}; 
   font-weight: lighter; 
   margin: 0 1%;
   &:hover{
      color: ${customTheme.colors.neutral200}; 
   }
  }
`