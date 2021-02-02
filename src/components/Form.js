import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import useCurrency from '../hooks/useCurrency'
import useCriptoCurrency from '../hooks/useCriptoCurrency'
import axios from 'axios'

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

const Form = () => {

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

  // call the cripto API
  useEffect(() => {
    const callAPI = async () => {
      const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      const result = await axios.get(URL)
      saveCriptoList(result.data.Data)
    }
    callAPI()
  }, [])

  // Quote currency
  const quoteCurrency = e => {
    e.preventDefault()

    // boths input are set
    if (currency === '' || criptoCurrency === '') {
      setError(true)
      return
    }

    // Pass data to main component
    setError(false)
  }

  return (
    <form
      onSubmit={quoteCurrency}
    >

      {error ? 'All fields are require' : null}

      <Selection />
      <SelectCripto />

      <Button
        type="submit"
        value="Calculate"
      />
    </form>
  )
}

export default Form
