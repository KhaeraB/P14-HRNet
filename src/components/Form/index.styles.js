import styled from 'styled-components'
import { Form } from "react-bootstrap";
// import { customTheme } from '../../utils/style/variables'

export const CreateForm = styled(Form)`
    display: flex;
    flex-direction : column; 
`

export const FieldSet = styled.fieldset`
    padding: 3%;
    display: flex;
    flex-direction : column; 
    min-inline-size: min-content;
    border-width: 2px;
    border-style: groove;
    border-color: rgb(192, 192, 192);
    border-image: initial;
    margin: 2% 0; 
`