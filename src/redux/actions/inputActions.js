export function costChange(cost) {
    return {
        type: 'COST',
        payload: cost
    }
}

export function prePayChange(prePay) {
    return {
        type: 'PREPAY',
        payload: prePay
    }
}

export function prePayAmountChange(prePayAmount) {
    return {
        type: 'PREPAY_AMOUNT',
        payload: prePayAmount
    }
}

export function timeChange(time) {
    return {
        type: 'TIME',
        payload: time
    }
}

export function popositionsChange(popositions) {
    return {
        type: 'POPOSITIONS',
        payload: popositions
    }
}

export function amountOfPositionsChange(amountOfPositions) {
    return {
        type: 'AMOUNT_OF_POSITIONS',
        payload: amountOfPositions
    }
}
