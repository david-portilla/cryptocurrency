import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import useCurrency from '../hooks/useCurrency'
import useCriptoCurrency from '../hooks/useCriptoCurrency'
import axios from 'axios'
import Error from './Error'
import PropTypes from 'prop-types'

const Button = styled.input`
  margin-top: 20px;
  font-weight: 700;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: all linear 0.25s;

  &:hover{
    background-color: #326AC0;
  }
`

const Form = ({setCurrency, setCriptoCurrency}) => {

  // Add state for cripto list
  const [criptoList, saveCriptoList] = useState([])
  const [error, setError] = useState(false)

  // Currencies
  const CURRENCIES = [
    {cod: 'USD', name: 'American Dollar'},
    {cod: 'COP', name: 'Colombian Peso'},
    {cod: 'MXN', name: 'Mexican Peso'},
    {cod: 'EUR', name: 'Euro'},
  ]

  // Custom Hook for Currencies
  const [currency, Selection] =
    useCurrency('Choose your currency', '', CURRENCIES)

  // Custom Hook for Cripto Currencies
  const [criptoCurrency, SelectCripto] =
    useCriptoCurrency('Choose your cripto currency', '', criptoList)

  // Get list of cripto currencies
  useEffect(() => {
    const getCriptoList = async () => {
      const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const result = await axios.get(URL)
      saveCriptoList(result.data.Data)
    }
    getCriptoList()
  }, [])

  // Get a Quote currency
  const quoteCurrency = e => {
    e.preventDefault()

    // boths input are set
    if (currency === '' || criptoCurrency === '') {
      setError(true)
      return
    }

    // Pass data to main component
    setError(false)
    setCurrency(currency)
    setCriptoCurrency(criptoCurrency)
  }

  return (
    <form
      onSubmit={quoteCurrency}
    >

      {error ? <Error message='All fields are required' /> : null}

      <Selection />
      <SelectCripto />

      <Button
        type="submit"
        value="Calculate"
      />
    </form>
  )
}

Form.propTypes = {
  setCurrency: PropTypes.func.isRequired,
  setCriptoCurrency: PropTypes.func.isRequired
}

export default Form
