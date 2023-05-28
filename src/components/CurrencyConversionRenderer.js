import React, { useState } from 'react'
import { CurrencyConverter } from './CurrencyConverter'



export default function CurrencyConversionRenderer({rates, isLoading}) {

    const [amountFrom, setAmountFrom] = useState(0)
    const [amountTo, setAmountTo] = useState(0)
    const [fromCurrency, setfromCurrency] = useState('EUR')
    const [toCurrency, setToCurrency] = useState('USD')  


    const onChahgeFromAmount = (value) => {
        setAmountFrom(value);
        const price = value / rates[fromCurrency];
        const result = price * rates[toCurrency];
        setAmountTo(result.toFixed(2))

    };

    const onChahgeToAmount = (value) => {
        setAmountTo(value)
    }
  return (
    <div>
         {isLoading ? <div>Loading</div> : (
            <div className='content'>
                <CurrencyConverter
                    rates={rates}
                    value={amountFrom}
                    currency={fromCurrency}
                    onChangeCurrency={setfromCurrency}
                    onChangeValue={onChahgeFromAmount}
                />
                <CurrencyConverter
                    rates={rates}
                    value={amountTo}
                    currency={toCurrency}
                    onChangeCurrency={setToCurrency}
                    onChangeValue={onChahgeToAmount}
                />
            </div>       
        )}        
    </div>
  )
}
