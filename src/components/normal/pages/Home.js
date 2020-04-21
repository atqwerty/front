import React, { useState } from 'react'
import HomeStyled from '../../styled/pages/HomeStyled'
import Form from '../molecules/Form'
import Input from '../atoms/Input'
import Text from '../atoms/Text'
import { connect } from 'react-redux'
import passData from '../../../misc/services/dataService'
import {
  costChange,
  prePayChange,
  prePayAmountChange,
  timeChange,
  popositionsChange,
  amountOfPositionsChange
} from '../../../redux/actions/inputActions'

const Home = ({
  cost,
  prePay,
  prePayAmount,
  time,
  popositions,
  amountOfPositions
}) => {
  const [chance, setChance] = useState(0)
  console.log(chance)

  const handleSubmit = () => {
    passData(
      cost,
      prePay,
      prePayAmount,
      time,
      popositions,
      amountOfPositions
    )
      .then(response => {
        setChance(Math.ceil(response['outcome'] * 100))
      })
  }

    return (
        <HomeStyled>
          <div style={{ gridRow: '1 / 3', backgroundColor: '#99D8CD' }}>
            <Form>
              <Input
                type = 'text'
                placeholder = 'Стоимость закупки'
                callback = { value => costChange(value)  }
              />
              <Input
                type = 'text'
                placeholder = 'Наличие предоплаты'
                callback = { value => prePayChange(value)  }
              />
              <Input
                type = 'text'
                placeholder = 'Размер предоплаты'
                callback = { value => prePayAmountChange(value)  }
              />
              <Input
                type = 'text'
                placeholder = 'Срок поставки'
                callback = { value => timeChange(value)  }
              />
              <Input
                type = 'text'
                placeholder = 'Попозиционно'
                callback = { value => popositionsChange(value)  }
              />
              <Input
                type = 'text'
                placeholder = 'Количество позиций'
                callback = { value => amountOfPositionsChange(value)  }
              />
            </Form>
          </div>
          <div style={{ backgroundColor: '#E2C0C1', boxSizing: 'border-box', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Text
              size = 'large'
            >
              Вероятность успешного тендера: { chance }%...
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
    cost: state.inputChange.cost,
    prePay: state.inputChange.prePay,
    prePayAmount: state.inputChange.prePayAmount,
    time: state.inputChange.time,
    popositions: state.inputChange.popositions,
    amountOfPositions: state.inputChange.amountOfPositions,
  }
}

export default connect(mapStateToProps) (Home)
