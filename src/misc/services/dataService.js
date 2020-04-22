import axios from 'axios'

const passData = (
  cost,
  prePay,
  prePayAmount,
  time,
  popositions,
  amountOfPositions
) => {

    var data = JSON.stringify({
        "ObshStZak": cost,
        "NalPr": prePay,
        "RazPr": prePayAmount,
        "SrPost": time,
        "Poz": popositions,
        "KolPoz": amountOfPositions,
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
                url: 'http://localhost:9875/patient-prediction/' + response.data.customer_ID,
            })
                .then(response => response.data)
        })
}

export default passData
