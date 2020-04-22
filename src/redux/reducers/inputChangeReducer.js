const initialState = {
    cost: '',
    prePay: '',
    prePayAmount: '',
    time: '',
    popositions: '',
    amountOfPopositions: '',
}

const inputChange = (state = initialState, action) => {
    switch(action.type) {
        case 'COST':
            return {
                ...state,
                cost: action.payload
            }
        case 'PREPAY':
            return {
                ...state,
                prePay: action.payload
            }
        case 'PREPAY_AMOUNT':
            return {
                ...state,
                prePayAmount: action.payload
            }
        case 'TIME':
            return {
                ...state,
                time: action.payload
            }
        case 'POPOSITIONS':
            return {
                ...state,
                popositions: action.payload
            }
        case 'AMOUNT_OF_POSITIONS':
            return {
                ...state,
                amountOfPositions: action.payload
            }
        default:
            return initialState
    }
}

export default inputChange
