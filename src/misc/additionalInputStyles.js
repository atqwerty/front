const textInputStyles = () => {
    return (
        `padding: 15px;
        outline: 0;
        box-sizing: border-box;
        &:focus {
        border: 5px solid limegreen;
        padding: 10px;
        }
        `
    )
}

const buttonInputStyles = () => {
    return (
        `cursor: pointer;
         background-color: #99D8CD;
         color: #F87596;
        `
    )
}

export const additionalInputStyles = {
    textInputStyles,
    buttonInputStyles
}
