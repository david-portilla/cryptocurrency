import React, {Fragment, useState} from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`

const SelectTag = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`

const useCriptoCurrency = (label, initialState, options) => {

  // Custom hook state
  const [state, updateState] = useState(initialState)

  const SelectCripto = () => (
    <Fragment>
      <Label>{label}</Label>
      <SelectTag
        onChange={e => updateState(e.target.value)}
        value={state}
      >
        <option value="">-- Select a cripto --</option>
        {options.map(option => (
          <option
            key={option.CoinInfo.Id}
            value={option.CoinInfo.Name}
          >
            {option.CoinInfo.FullName}
          </option>
        ))
        }
      </SelectTag>
    </Fragment>
  )

  return [state, SelectCripto, updateState]
}

export default useCriptoCurrency