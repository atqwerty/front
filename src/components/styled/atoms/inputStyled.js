import styled from 'styled-components'

const InputStyled = styled.input`
outline: 0;
border: none;
font-size: 25px;
text-align: center;
font-family: inherit;
height: ${ props => props.height || '60%' };
width: ${ props => props.width || '80%' };
margin: auto;
${ props => props.inputStyles }
`

export default InputStyled
