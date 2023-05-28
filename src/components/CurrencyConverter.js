const defaultCurrencies = ['CAD', 'USD', 'EUR', 'PLN'];

export const CurrencyConverter = ({ value,  currency, onChangeValue, onChangeCurrency, rates}) => { 
  const ratesList = Object.entries(rates).filter(item => !defaultCurrencies.includes(item[0]));

  return(
    <div className="block">
      <ul className="currencies">
        {defaultCurrencies.map((cur) => (
          <li
            onClick={() => onChangeCurrency(cur)}
            className={currency === cur ? 'active' : ''}
            key={cur}
          >
            {cur}
          </li>
        ))}
        <li>
          <select value={currency} onChange={(e) => onChangeCurrency(e.target.value)}>
            {ratesList.map(([key, value]) => (
              <option key={key} value={key} selected={currency === key}>{key}</option>
            ))}
          </select>
        </li>
      </ul>
      <input
        type="number"
        onChange={(e) => onChangeValue(e.target.value)}
        value={value}
        placeholder={0}
      />
      
    </div>
  );
};
