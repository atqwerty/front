import axios from 'axios'

const passData = (
  pregnancies,
  glucose,
  bloodPressure,
  skinThickness,
  insulin,
  bmi,
  dpf,
  age,
) => {

    var data = JSON.stringify({
        "Pregnancies": pregnancies,
        "Glucose": glucose,
        "BloodPressure": bloodPressure,
        "SkinThickness": skinThickness,
        "Insulin": insulin,
        "BMI": bmi,
        "DiabetesPedigreeFunction": dpf,
        "Age": age
    })

    return axios({
        method: 'POST',
        url: 'http://localhost:9875/patient-record',
        data: data,
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => {
            return axios({
                method: 'GET',
                url: 'http://localhost:9875/patient-prediction/' + response.data.patient_ID,
            })
                .then(response => response.data)
        })
}

export default passData
