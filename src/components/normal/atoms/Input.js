import React, { useEffect, useState, useRef } from 'react'
import InputStyled from '../../styled/atoms/inputStyled'
import { additionalInputStyles } from '../../../misc/additionalInputStyles'
import { connect } from 'react-redux'

const Input = ({
    type,
    text,
    placeholder,
    callback,
    height,
    width,
    dispatch,
    clickCallback,
    ...props
}) => {
    const inputRef = useRef()
    const [typeOf] = useState(type)
    const [buttonText] = useState(text)
    const [textPlaceholder] = useState(placeholder)
    const [inputStyles, setInputStyles] = useState('')
    const [incomingHeight] = useState(height)
    const [incomingWidth] = useState(width)

    useEffect(() => {
        switch(typeOf) {
            case 'button':
            case 'submit':
                setInputStyles(additionalInputStyles.buttonInputStyles())
                break
            case 'text':
            case 'password':
                setInputStyles(additionalInputStyles.textInputStyles())
                break
            case 'file':
                setInputStyles(
                    `width: fit-content;
                 font-size: 10px;
                 `
                )
                break
            default:
                break
        }
    }, [typeOf])

    return (
        <InputStyled
          onClick = { clickCallback }
          height = { incomingHeight }
          width = { incomingWidth }
          ref = { inputRef }
          type = { typeOf }
          inputStyles = { inputStyles }
          value = { buttonText }
          placeholder = { textPlaceholder }
          onChange = { e => dispatch(callback(e.target.value)) }
        />
    )
}

export default connect() (Input)
