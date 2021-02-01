import React, {Fragment, useState} from 'react'

const useCurrency = (label, initialState, options) => {
  // Custom hook state
  const [state, updateState] = useState(initialState)

  const Selection = () => (
    <Fragment>
      <label>{label}</label>
      <select
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
      </select>
    </Fragment>
  )

  return [state, Selection, updateState]
}

export default useCurrency