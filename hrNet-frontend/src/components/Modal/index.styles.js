import styled from 'styled-components'
import {Modal } from "react-bootstrap";
// import { customTheme } from '../../utils/style/variables'

export const Backdrop = styled("div")`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
  
`;

export const ModalForm = styled(Modal)`
position: fixed;
width: 100%;
z-index: 1150;
border: 1px solid #e5e5e5;

box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
padding: 20px;
`;