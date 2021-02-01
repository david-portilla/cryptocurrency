import React, {Fragment, useState} from 'react'

const useCurrency = () => {
  // Custom hook state
  const [state, updateState] = useState('')

  const Selection = () => (
    <Fragment>
      <label>Currency</label>
      <select>
        <option value="MXN">Mexican pesos</option>
      </select>
    </Fragment>
  )

  return [state, Selection, updateState]
}

export default useCurrency