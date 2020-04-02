const initialState = {
    pregnancies: '',
    glucose: '',
    bloodPressure: '',
    skinThickness: '',
    insulin: '',
    bmi: '',
    dpf: '',
    age: '',
}

const inputChange = (state = initialState, action) => {
    switch(action.type) {
        case 'PREGNANCIES':
            return {
                ...state,
                pregnancies: action.payload
            }
        case 'GLUCOSE':
            return {
                ...state,
                glucose: action.payload
            }
        case 'BLOOD_PRESSURE':
            return {
                ...state,
                bloodPressure: action.payload
            }
        case 'SKIN_THICKNESS':
            return {
                ...state,
                skinThickness: action.payload
            }
        case 'INSULIN':
            return {
                ...state,
                insulin: action.payload
            }
        case 'BMI':
            return {
                ...state,
                bmi: action.payload
            }
        case 'DPF':
            return {
                ...state,
                dpf: action.payload
            }
        case 'AGE':
            return {
                ...state,
                age: action.payload
            }
        default:
            return initialState
    }
}

export default inputChange
