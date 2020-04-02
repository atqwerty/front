import React from 'react'
import FormStyled from '../../styled/molecules/formStyled'

const Form = ({ children, ...props }) => {
    return(
       <FormStyled>
         { children }
       </FormStyled>
    )
}

export default Form
