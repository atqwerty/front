import React, { useState, useEffect } from 'react'
import HomeStyled from '../../styled/pages/HomeStyled'
import Form from '../molecules/Form'
import Input from '../atoms/Input'
import Text from '../atoms/Text'
import { connect } from 'react-redux'
import passData from '../../../misc/services/dataService'
import {
  pregnanciesChange,
  glucoseChange,
  bloodPressureChange,
  skinThicknessChange,
  insulinChange,
  BMIChange,
  DPFChange,
  ageChange
} from '../../../redux/actions/inputActions'

const Home = ({
  pregnancies,
  glucose,
  bloodPressure,
  skinThickness,
  insulin,
  bmi,
  dpf,
  age,
  ...props
}) => {
  const [chance, setChance] = useState(0)
  console.log(chance)

  const handleSubmit = () => {
    passData(
      pregnancies,
      glucose,
      bloodPressure,
      skinThickness,
      insulin,
      bmi,
      dpf,
      age
    )
      .then(response => {
        setChance(Math.ceil(response['probability-of-diabetes'] * 100))
      })
  }

    return (
        <HomeStyled>
          <div style={{ gridRow: '1 / 3', backgroundColor: '#99D8CD' }}>
            <Form>
              <Input
                type = 'text'
                placeholder = 'Pregnancies'
                callback = { value => pregnanciesChange(value)  }
              />
              <Input
                type = 'text'
                placeholder = 'Glucose'
                callback = { value => glucoseChange(value)  }
              />
              <Input
                type = 'text'
                placeholder = 'Blood Pressure'
                callback = { value => bloodPressureChange(value)  }
              />
              <Input
                type = 'text'
                placeholder = 'Skin Thickness'
                callback = { value => skinThicknessChange(value)  }
              />
              <Input
                type = 'text'
                placeholder = 'Insulin'
                callback = { value => insulinChange(value)  }
              />
              <Input
                type = 'text'
                placeholder = 'BMI'
                callback = { value => BMIChange(value)  }
              />
              <Input
                type = 'text'
                placeholder = 'Diabetes P. function'
                callback = { value => DPFChange(value)  }
              />
              <Input
                type = 'text'
                placeholder = 'Age'
                callback = { value => ageChange(value)  }
              />
            </Form>
          </div>
          <div style={{ backgroundColor: '#E2C0C1', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Text
              size = 'large'
            >
              Вероятность диабета: { chance }%...
            </Text>
          </div>
          <div style={{ backgroundColor: '#F87596', gridArea: '2 / 2 / 2 / 2', display: 'flex' }}>
              <Input
                clickCallback = { handleSubmit }
                type = 'button'
                text = 'submit'
                height = '40%'
                width = '50%'
              />
          </div>
        </HomeStyled>
    )
}

const mapStateToProps = (state) => {
  return {
    pregnancies: state.inputChange.pregnancies,
    glucose: state.inputChange.glucose,
    bloodPressure: state.inputChange.bloodPressure,
    skinThickness: state.inputChange.skinThickness,
    insulin: state.inputChange.insulin,
    bmi: state.inputChange.bmi,
    dpf: state.inputChange.dpf,
    age: state.inputChange.age,
  }
}

export default connect(mapStateToProps) (Home)
