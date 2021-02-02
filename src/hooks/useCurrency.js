import React, {Fragment, useState} from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

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

const useCurrency = (label, initialState, options) => {
  // Custom hook state
  const [state, updateState] = useState(initialState)

  const Selection = () => (
    <Fragment>
      <Label>{label}</Label>
      <SelectTag
        onChange={e => updateState(e.target.value)}
        value={state}
      >
        <option value="">-- Select a currency --</option>
        {options.map(option => (
          <option
            key={option.cod}
            value={option.cod}
          >
            {option.name}
          </option>
        ))
        }
      </SelectTag>
    </Fragment>
  )

  return [state, Selection, updateState]
}

useCurrency.propTypes = {
  label: PropTypes.string.isRequired,
  initialState: PropTypes.array.isRequired,
  options: PropTypes.array.isRequired
}

export default useCurrency