import { IExchangeRates } from "../../interfaces/exchange-rate";

export default function CurrentExchangeRate({
  currency,
  onChangeCurrency,
}: IExchangeRates) {
  const defaultCurrencies = ["RUB", "USD", "EUR"];

  return (
    <div className="ExchangeRate">
      <ul className="currencies">
        {defaultCurrencies.map((cur) => (
          <li
            onClick={() => onChangeCurrency(cur)}
            key={cur}
            className={currency === cur ? "active" : ""}
          >
            {cur}
          </li>
        ))}
      </ul>
      <div className="result">
        <ul className="rates">
          {defaultCurrencies.map((cur) => (
            <li key={cur}>{cur}:</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
